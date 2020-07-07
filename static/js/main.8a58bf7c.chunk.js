(this["webpackJsonptastefully-tiffanys-cheesecakes"]=this["webpackJsonptastefully-tiffanys-cheesecakes"]||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(23),l=a.n(c),r=(a(84),a(24)),o=a(6),i=(a(85),function(){return s.a.createElement("div",{className:"navigation"},s.a.createElement("ul",null,s.a.createElement("li",{className:"active"},s.a.createElement(r.b,{to:"/TastefullyTiffanysCheesecakes"},"Home")),s.a.createElement("li",null,s.a.createElement(r.b,{to:"/TastefullyTiffanysCheesecakes/cheesecakes"},"Cheesecakes")),s.a.createElement("li",null,s.a.createElement(r.b,{to:"/TastefullyTiffanysCheesecakes/placeorder"},"Order"))))}),h=function(){return s.a.createElement("div",{className:"topheader"},s.a.createElement("img",{src:"/TastefullyTiffanysCheesecakes/img/TTC_LOGO.png"}))},u=function(){return s.a.createElement("div",{className:"introContainer"},s.a.createElement("div",{className:"intro"},s.a.createElement("p",null,"Every occasion deserves a Cheesecake!"),s.a.createElement("p",null,"Welcome to Tastefully Tiffany's Cheesecake Bakery! Where every flavor is an experience, and every cheesecake is an extravaganza! Come see what people have been raving about, and try one for yourself!")))},m=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("b",null," \xa0\xa0\xa0\xa0\xa0\xa0 Phone:"),s.a.createElement("p",null,"\xa0\xa0(979)-201-3200")),s.a.createElement("div",null,s.a.createElement("b",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Email:")," ",s.a.createElement("p",null,"\xa0\xa0tastefullytiffanyscheesecakes@gmail.com"))),s.a.createElement("a",{className:"icons",href:"https://www.facebook.com/tastefullytiffanyscheesecakes",target:"_blank"},s.a.createElement("img",{src:"/TastefullyTiffanysCheesecakes/img/f_logo_RGB-Black_58.png"})),s.a.createElement("a",{href:"https://www.instagram.com/tastefullytiffanyscheesecakes/?igshid=fmhozwz40qcs",target:"_blank"},s.a.createElement("img",{src:"/TastefullyTiffanysCheesecakes/img/glyph-logo_May2016.png"})))},d=function(){return s.a.createElement("div",null,s.a.createElement(i,null),s.a.createElement(h,null),s.a.createElement(u,null),s.a.createElement(m,null))},p=a(15),f=a(16),y=a(8),E=a(18),k=a(17),v=a(31),g=a.n(v),C=a(76),b=a.n(C),N=(a(107),a(75)),T=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).purchaseAmount=e.amount,n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement(N.PayPalButton,{amount:this.purchaseAmount,onSuccess:function(t){console.log(t),e.props.paymentSuccessful(),alert("Transaction completed by "+t)}})}}]),a}(s.a.Component),O=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).sendData=function(){var e=n.props.uniqueID;n.props.removeCheesecakeClick(e)},n.changeQty=function(e){var t=n.state.qty,a=parseInt(e.target.value),s=n.state.cost,c=-1*(s*t-s*a);n.props.adjustTotal(c),n.props.updateOrder({uniqueID:n.props.uniqueID,type:n.state.value,cheesecake:n.state.value2,qty:a,price:n.state.cost,request:n.state.specialRequest}),n.setState({qty:a})},n.handleChange=n.handleChange.bind(Object(y.a)(n)),n.handleChange2=n.handleChange2.bind(Object(y.a)(n)),n.handleChange4=n.handleChange4.bind(Object(y.a)(n)),n.state={cheesecakeTypes:e.cheesecakes,selectorValues:[],value:"",value2:"",specialRequest:"",cost:0,qty:1},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.cheesecakeTypes[0].price,t=this.state.cheesecakeTypes[0].Cakes[0].adjprice,a=[],n=[];this.state.cheesecakeTypes.forEach((function(e){e.Cakes.forEach((function(e){n.push(e.name)})),a.push({type:e.type,cakes:n}),n=[]})),this.setState({selectorValues:a,value:this.state.cheesecakeTypes[0].type,value2:this.state.cheesecakeTypes[0].Cakes[0].name,cost:e+t}),this.props.adjustTotal(e+t)}},{key:"componentWillUnmount",value:function(){var e=this.state.cost*this.state.qty*-1;this.props.adjustTotal(e)}},{key:"handleChange",value:function(e){var t=this,a=this.state.cost,n=0,s="";this.state.cheesecakeTypes.forEach((function(c){e.target.value===c.type&&(t.props.adjustTotal((a-c.price)*t.state.qty*-1),n=c.price,s=c.Cakes[0].name)})),this.props.updateOrder({uniqueID:this.props.uniqueID,type:e.target.value,cheesecake:s,qty:this.state.qty,price:n,request:this.state.specialRequest}),this.setState({value:e.target.value,value2:s,cost:n})}},{key:"handleChange2",value:function(e){this.props.updateOrder({uniqueID:this.props.uniqueID,type:this.state.value,cheesecake:e.target.value,qty:this.state.qty,price:this.state.cost,request:this.state.specialRequest}),this.setState({value2:e.target.value})}},{key:"handleChange4",value:function(e){this.props.updateOrder({uniqueID:this.props.uniqueID,type:this.state.value,cheesecake:this.state.value2,qty:this.state.qty,price:this.state.cost,request:e.target.value}),this.setState({specialRequest:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.selectorValues,a=[],c=[];return t.forEach((function(t,n){a.push(s.a.createElement("option",{value:t.type,key:n},t.type," Cheesecake")),e.state.value===t.type&&t.cakes.forEach((function(e,t){c.push(s.a.createElement("option",{value:e,key:t},e.replace(" Cheesecake","")))}))})),c.length<2?s.a.createElement(n.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:this.sendData}," Remove Cheesecake "),s.a.createElement("label",{className:"quantity"},"QTY: ")," ",s.a.createElement("input",{type:"number",id:"quantity",name:"quantity",value:this.state.qty,min:"1",max:"100",onChange:this.changeQty}),s.a.createElement("label",{className:"cheesecakeSelector"}," Cheesecake Type: "),s.a.createElement("select",{value:this.state.value,onChange:this.handleChange},a),s.a.createElement("textarea",{value:this.state.specialRequest,placeholder:"Speical Request...",onChange:this.handleChange4}),s.a.createElement("br",null)):s.a.createElement(n.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:this.sendData}," Remove Cheesecake "),s.a.createElement("label",{className:"quantity"},"QTY: ")," ",s.a.createElement("input",{type:"number",id:"quantity",name:"quantity",value:this.state.qty,min:"1",max:"100",onChange:this.changeQty}),s.a.createElement("label",{className:"cheesecakeSelector"}," Cheesecake Type: "),s.a.createElement("select",{value:this.state.value,onChange:this.handleChange},a),s.a.createElement("label",{className:"cheesecakeSelector"}," ",this.state.value,": "),s.a.createElement("select",{value:this.state.value2,onChange:this.handleChange2},c),s.a.createElement("br",null),s.a.createElement("textarea",{value:this.state.specialRequest,placeholder:"Speical Request...",onChange:this.handleChange4}),s.a.createElement("br",null))}}]),a}(s.a.Component),q=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).removeCheesecake=function(e){if(n.state.cheesecakeSelectors.length>1){var t=n.state.cheesecakeSelectors,a=n.state.cheesecakeOrdered,s=-1;t.forEach((function(t,a){t.props.uniqueID===e&&(s=a)})),t.splice(s,1),a.splice(s,1),n.setState({cheesecakeSelectors:t,cheesecakeOrdered:a})}},n.changeOrderedCheesecake=function(e){var t=n.state.cheesecakeOrdered,a=-1;t.forEach((function(t,n){e.uniqueID===t.uniqueID&&(a=n)})),t.splice(a,1,e),n.setState({cheesecakeOrdered:t})},n.adjustTotal=function(e){var t=n.state.totalCost;t+=e,n.setState({totalCost:t})},n.addCheesecake=n.addCheesecake.bind(Object(y.a)(n)),n.removeCheesecake=n.removeCheesecake.bind(Object(y.a)(n)),n.changeOrderedCheesecake=n.changeOrderedCheesecake.bind(Object(y.a)(n)),n.adjustTotal=n.adjustTotal.bind(Object(y.a)(n)),n.handleChange=n.handleChange.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.paymentSuccessful=n.paymentSuccessful.bind(Object(y.a)(n));var s=new Date;return s.setDate(s.getDate()+2),n.state={typesAreLoaded:!1,cheesecakeTypes:null,cheesecakeSelectors:[],cheesecakeOrdered:[],contactInformation:{firstName:"",lastName:"",phoneNumber:"",email:"",address:"",city:"",state:"TX",zip:"",deliveryDate:s},errorLog:[],ordered:!1,uniqueID:0,totalCost:0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this;console.log("NEW PAGES Loaded"),g.a.get("https://ttcapi.azurewebsites.net/api/cheesecake-types").then((function(t){e.setState({typesAreLoaded:!0,cheesecakeTypes:t.data}),e.addCheesecake()})).catch((function(e){e.response?500===e.response.status&&t.setState({error:!0}):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}},{key:"addCheesecake",value:function(){var e=[],t=this.state.cheesecakeSelectors,a=this.state.uniqueID+1;t.push(s.a.createElement(O,{removeCheesecakeClick:this.removeCheesecake,updateOrder:this.changeOrderedCheesecake,adjustTotal:this.adjustTotal,cheesecakes:this.state.cheesecakeTypes,uniqueID:a})),(e=this.state.cheesecakeOrdered).push({uniqueID:a,type:this.state.cheesecakeTypes[0].type,cheesecake:this.state.cheesecakeTypes[0].Cakes[0].name,qty:1,price:this.state.cheesecakeTypes[0].price+this.state.cheesecakeTypes[0].Cakes[0].adjprice,request:""}),this.setState({cheesecakeSelectors:t,cheesecakeOrdered:e,uniqueID:a})}},{key:"handleChange",value:function(e){var t=this.state.contactInformation;t[e.target.id]=e.target.value,this.validateInfo(e.target.id,e.target.value),this.setState({contactInformation:t})}},{key:"updateDate",value:function(e){var t=this.state.contactInformation;t.deliveryDate=e,this.setState({contactInformation:t})}},{key:"validateInfo",value:function(e,t){var a=this.state.errorLog,n=!0,s=!1,c=-1;("firstName"===e&&(""===t?(a.forEach((function(e){"First Name"===e&&(n=!1)})),n&&a.push("First Name")):(a.forEach((function(e,t){"First Name"===e&&(s=!0,c=t)})),s&&a.splice(c,1))),"lastName"===e&&(""===t?(a.forEach((function(e){"Last Name"===e&&(n=!1)})),n&&a.push("Last Name")):(a.forEach((function(e,t){"Last Name"===e&&(s=!0,c=t)})),s&&a.splice(c,1))),"phoneNumber"===e)&&(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(t)?(a.forEach((function(e,t){"Phone Number"===e&&(s=!0,c=t)})),s&&a.splice(c,1)):(a.forEach((function(e){"Phone Number"===e&&(n=!1)})),n&&a.push("Phone Number")));"email"===e&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?(a.forEach((function(e,t){"Email"===e&&(s=!0,c=t)})),s&&a.splice(c,1)):(a.forEach((function(e){"Email"===e&&(n=!1)})),n&&a.push("Email")));if("address"===e&&(""===t?(a.forEach((function(e){"Address"===e&&(n=!1)})),n&&a.push("Address")):(a.forEach((function(e,t){"Address"===e&&(s=!0,c=t)})),s&&a.splice(c,1))),"city"===e&&(""===t?(a.forEach((function(e){"City"===e&&(n=!1)})),n&&a.push("City")):(a.forEach((function(e,t){"City"===e&&(s=!0,c=t)})),s&&a.splice(c,1))),"state"===e&&(""===t?(a.forEach((function(e){"State"===e&&(n=!1)})),n&&a.push("State")):(a.forEach((function(e,t){"State"===e&&(s=!0,c=t)})),s&&a.splice(c,1))),"zip"===e){/^\d{5}$|^\d{5}-\d{4}$/.test(t)?(a.forEach((function(e,t){"Zip"===e&&(s=!0,c=t)})),s&&a.splice(c,1)):(a.forEach((function(e){"Zip"===e&&(n=!1)})),n&&a.push("Zip"))}this.state.cheesecakeOrdered.length<1?(a.forEach((function(e){"Cheesecake"===e&&(n=!1)})),n&&a.push("Cheesecake")):(a.forEach((function(e,t){"Cheesecake"===e&&(s=!0,c=t)})),s&&a.splice(c,1)),this.setState({errorLog:a})}},{key:"handleSubmit",value:function(e){if(this.validateInfo("firstName",this.state.contactInformation.firstName),this.validateInfo("lastName",this.state.contactInformation.lastName),this.validateInfo("phoneNumber",this.state.contactInformation.phoneNumber),this.validateInfo("email",this.state.contactInformation.email),this.validateInfo("address",this.state.contactInformation.address),this.validateInfo("city",this.state.contactInformation.city),this.validateInfo("state",this.state.contactInformation.state),this.validateInfo("zip",this.state.contactInformation.zip),this.state.cheesecakeOrdered.length<1)alert("You forgot to select a cheesecake...you will be missing out on some great cheesecakes!"),e.preventDefault();else if(this.state.errorLog.length>0){var t="";this.state.errorLog.forEach((function(e){t+=e+"\n"})),alert("Please correct the following information: \n\n"+t),e.preventDefault()}else this.setState({ordered:!0}),e.preventDefault()}},{key:"paymentSuccessful",value:function(){console.log("made it to payment successful");var e=this.state.contactInformation,t=this.state.cheesecakeOrdered;g.a.post("https://ttcapi.azurewebsites.net/api/send-mail",{contactInfo:e,orderedCheesecakes:t}).then((function(e){alert("Order processed! Thank you and please check your email for order summary.")})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this,t=[];return["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].forEach((function(e,a){t.push(s.a.createElement("option",{value:e,key:a},e))})),s.a.createElement(n.Fragment,null,s.a.createElement(i,null),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{className:"title"},"ORDER FORM"),s.a.createElement("label",{className:"subtitle"},"CONTACT INFORMATION"),s.a.createElement("label",{htmlFor:"firstName",className:"first-name"},"First:"),s.a.createElement("input",{id:"firstName",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"lastName",className:"last-name"},"Last:"),s.a.createElement("input",{id:"lastName",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"phoneNumber",className:"phoneNumber"},"Phone #:"),s.a.createElement("input",{id:"phoneNumber",type:"tel",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"email",className:"email"},"Email:"),s.a.createElement("input",{id:"email",type:"email",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"address",className:"address"},"Address:"),s.a.createElement("input",{id:"address",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"city",className:"city"},"City:"),s.a.createElement("input",{id:"city",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"state",className:"state"},"State:"),s.a.createElement("select",{className:"state",id:"state",value:this.state.contactInformation.state,onChange:this.handleChange},t),s.a.createElement("label",{htmlFor:"zip",className:"zip"},"Zip Code:"),s.a.createElement("input",{id:"zip",type:"text",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"deliveryDate",className:"deliveryDate"},"Delivery Date:"),s.a.createElement(b.a,{selected:this.state.contactInformation.deliveryDate,onChange:function(t){return e.updateDate(t)},minDate:this.state.contactInformation.deliveryDate,withPortal:!0,portalId:"deliveryDate",placeholderText:"Select a delivery date"}),s.a.createElement("label",{className:"note"},"* Only deliver to the following areas in TX: Brazoria, Matagorda, Fort Bend, and Harris Counties"),s.a.createElement("hr",null),s.a.createElement("label",{className:"subtitle"},"CHEESECAKES"),this.state.cheesecakeSelectors.map((function(e){return s.a.createElement(s.a.Fragment,{key:e.props.uniqueID},e)})),s.a.createElement("button",{type:"button",onClick:this.addCheesecake}," Add Cheesecake "),s.a.createElement("hr",null),s.a.createElement("label",{className:"subtitle"},"ORDER SUMMARY"),s.a.createElement("label",{className:"totalCost"},"Total Cost: $",this.state.totalCost),this.state.ordered?s.a.createElement("div",{className:"paymentOption"}," ",s.a.createElement(T,{amount:this.state.totalCost,paymentSuccessful:this.paymentSuccessful})):s.a.createElement("button",{className:"myButton"},"Submit")),s.a.createElement(m,null))}}]),a}(s.a.Component),I=document.getElementById("modal"),S=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).element=document.createElement("div"),n.element.className="modal-container",n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){I.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){I.removeChild(this.element)}},{key:"render",value:function(){return Object(c.createPortal)(this.props.children,this.element)}}]),a}(s.a.Component),D=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).toggleModal=function(e){var t,a=e.target.getAttribute("data-cheesecakename");t=n.state.cheesecakes.filter((function(e){return e.name===a})),n.setState({showModal:!n.state.showModal,modalCheesecake:t})},n.state={cheesecakeTypes:null,cheesecakes:null,typesAreLoaded:!1,cheesecakesAreLoaded:!1,error:!1,modalCheesecake:null,showModal:!1},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this;g.a.get("https://ttcapi.azurewebsites.net/api/cheesecake-types").then((function(t){e.setState({typesAreLoaded:!0,cheesecakeTypes:t.data})})).catch((function(e){e.response?500===e.response.status&&t.setState({error:!0}):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})),g.a.get("https://ttcapi.azurewebsites.net/api/cheesecakes").then((function(t){e.setState({cheesecakesAreLoaded:!0,cheesecakes:t.data})})).catch((function(e){e.response?500===e.response.status&&t.setState({error:!0}):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,c=t.typesAreLoaded,l=t.cheesecakesAreLoaded,r=(t.cheesecakes,t.cheesecakeTypes),o=t.showModal;if(!a)return c&&l?s.a.createElement(n.Fragment,null,s.a.createElement(i,null),r.map((function(t){return s.a.createElement("div",{key:t.index},s.a.createElement("div",{className:"collectionTitle"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,t.type[0].toUpperCase()+t.type.substring(1)+" Cheesecakes")),s.a.createElement("div",{className:"row"},t.Cakes.map((function(t){return s.a.createElement("div",{className:"column",key:t.index},s.a.createElement("div",{className:"imgContainer"},s.a.createElement("img",{className:"image",src:t.image,onClick:e.toggleModal,"data-cheesecaketype":t.type,"data-cheesecakename":t.name,"data-cheesecakeindex":t.index}),s.a.createElement("div",{className:"middle"},s.a.createElement("div",{className:"text",onClick:e.toggleModal,"data-cheesecaketype":t.type,"data-cheesecakename":t.name,"data-cheesecakeindex":t.index},t.name))))}))))})),o?s.a.createElement(S,null,s.a.createElement("div",{className:"modal"},s.a.createElement("button",{type:"button",id:"modal-close-btn",className:"modal-close-btn",onClick:this.toggleModal},s.a.createElement("strong",null,"X")),s.a.createElement("div",{className:"modal-info-container"},s.a.createElement("img",{className:"modal-img",src:this.state.modalCheesecake[0].image,alt:"profile picture"}),s.a.createElement("p",null),s.a.createElement("h3",{id:"name",className:"modal-name cap"},this.state.modalCheesecake[0].name),s.a.createElement("p",{className:"modal-text"},"Description: "),s.a.createElement("p",{className:"modal-text cap"},this.state.modalCheesecake[0].description),s.a.createElement("p",{className:"modal-text"},"Price: $",this.state.modalCheesecake[0].adjprice+this.state.modalCheesecake[0].Type.price," ")))):null,s.a.createElement(m,null)):s.a.createElement(n.Fragment,null,s.a.createElement(i,null),s.a.createElement("div",null,"Loading..."))}}]),a}(s.a.Component);var j=function(){return s.a.createElement(r.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/TastefullyTiffanysCheesecakes",component:d}),s.a.createElement(o.a,{path:"/TastefullyTiffanysCheesecakes/placeorder",component:q}),s.a.createElement(o.a,{path:"/TastefullyTiffanysCheesecakes/cheesecakes",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(r.a,{basename:"/TastefullyTiffanysCheesecakes"},s.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(164)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.8a58bf7c.chunk.js.map