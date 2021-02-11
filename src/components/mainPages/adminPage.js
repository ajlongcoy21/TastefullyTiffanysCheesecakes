// Import supporting files
import React, { Fragment } from "react";
import axios from "axios";
import Navigation from '../navigation';
import Footer from '../footer';

// Create adminPage component

export default class AdminPage extends React.Component
{
    /*
        Constructor - this contstructor helps setup the state for the component.
        cheesecakeTypes - array of types of cheesecakes from the database. Consists of 3 properties
              index: Integer - index in database
               type: String - description of the group of cheesecakes
              price: Integer - general price of cheesecake group
        cheeecakes - array of cheesecakes from the database. Consists of 8 properties
                  index: Integer - index in database
                   type: Integer - relational value to cheesecakeTypes index
                  fruit: String - optional string describing fruit
              specialty: String - optional string describing specialty
                   name: String - name of cheesecake
            description: String - description of cheesecake
               adjprice: Integer - adjustable value to add value to cheesecake
                  image: Blob - image for cheesecake
        typesAreLoaded - boolean to indicate the cheesecake types were retrieved from the database
        cheesecakesAreLoaded - boolean to indicate the cheesecakes were retrieved from the database
        error - boolean to idicate an error occured during retrieving data
        modalCheesecake - holds a cheesecake object for display in the modal
        showModal - boolean to control the display of cheesecake modal popup
    */

    constructor(props) 
    {
      super(props);

      this.state = 
      {
        cheesecakeTypes: null,
        typesAreLoaded: false,
        error: false,
        image: null
      }

      this.imageSelected = this.imageSelected.bind(this);

    }

    /**************************************************************************************************************
        componentDidMount
        parameters: N/A
        Return: N/A
        description: The componentDidMount function is used to makes calls to the database for the types of cheesecakes
                     and the cheesecakes. If successful it will update the following information in the state:
                     cheesecakeTypes, cheesecakes, typesAreLoaded, cheesecakesAreLoaded
    **************************************************************************************************************/

    componentDidMount()
    {
        var self = this;

        // Make a call to the api for the complete list of cheesecake types
        //https://ttcapi.azurewebsites.net
        axios.get(`http://localhost:5000/api/cheesecake-types`)
        .then(response => {
            
            // Set the state on successful return of cheesecake types data
            this.setState({
                typesAreLoaded: true,             // data is loaded
                cheesecakeTypes: response.data    // set the cheesecakeTypes state variable to the response data
            });

            console.log(response.data);
            

        })
        .catch(error => { 

            // Check to see if the server responded with an error and response for the error
            if (error.response) 
                {
                    // If the server responds with a status of 500 set the error state to true for the redirect to error page
                    if (error.response.status === 500) 
                    {
                        self.setState({error: true});
                    }
                } 
                else if (error.request) 
                {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } 
                else 
                {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

                console.log(error.config); 
        })

    }

    async imageSelected(event)
    {
        let fileName = event.target.files[0].name;
        let imageURL = URL.createObjectURL(event.target.files[0]);
        let image = await axios.get(imageURL, {responseType: 'arraybuffer'});
        let returnedB64 = Buffer.from(image.data).toString('base64');
        let completeImageB64 = 'data:image/png;base64,' + returnedB64;

        console.log(completeImageB64);
        

        axios.post(`http://localhost:5000/api/uploadpicture`, { fileName: fileName, pictureData: completeImageB64 })
          .then(function (response) 
          {
            // call sign in function
            console.log('success');
            
            
          })
          .catch(function (error) {

            console.log('error');
                    
          });

        
        this.setState({image: imageURL});   
    }

    render() 
    {
        // Get necessary state variables
        const { error, typesAreLoaded, image, cheesecakeTypes } = this.state;

        // If we have the server response status of 500, redirect to error page
        if (error) 
        {
            //return <Redirect to='/error'/>;
        } 
        // If we are waiting for the data to load...notify the user
        else if (!typesAreLoaded) 
        {
            
            return (
                <Fragment>
                    <Navigation />
                    <div>Loading...</div>
                </Fragment>
            )
            
        } 
        else if (image !== null)
        {
            return(
                <Fragment>
                     <Navigation/>
                        <br/>
                        <p><input type="file"  accept="image/*" name="image" id="file"  onChange={this.imageSelected} /></p>
                        <p><label htmlFor="file">Uploaded Image</label></p>
                        <p><img id="output" width="200" src={this.state.image}/></p>
                     <Footer/>
                </Fragment>

            )
            
        }
        else
        {
            console.log(cheesecakeTypes);
            
            return(
                <Fragment>
                     <Navigation/>
                        <br/>
                        <p><input type="file"  accept="image/*" name="image" id="file"  onChange={this.imageSelected} /></p>
                        <p className='types'>Cheesecake Types <img src="/TastefullyTiffanysCheesecakes/img/addProperty.png" style={{width: 15 + 'px', height:15 + 'px', backgroundColor: 'white'}}></img></p>
                        {
                            cheesecakeTypes.map((type, index) => 
                            {
                                return (
                                    <p key={index}>{type.type} <img src="/TastefullyTiffanysCheesecakes/img/editProperty.png" style={{width: 15 + 'px', height:15 + 'px', backgroundColor: 'white'}}></img></p>
                                )
                            })
                        }
                     <Footer/>
                </Fragment>
             );
        }
     }
}