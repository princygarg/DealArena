
import React,{Component} from 'react';
import Sidebar from "./sidebar.js"
import firebase from "./Config";
import history from './../history';


var db=firebase.firestore()
class userhome extends Component{
	
	constructor(props){
		super(props);
		this.ref=db.collection("offerDetails")
		this.unsubscribe=null;
		this.state={
			offers:[],
		};
	}
  
	componentDidMount(){
		this.checkAuth();
		const params = new URLSearchParams(this.props.location.search);

		const category = params.get("category");
		var offers = firebase.firestore().collection("offerDetails");
		if (category) offers = offers.where("category", "==", category);
		offers
		  .get()
		  .then((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => doc.data());
			this.setState({ offers: data }); // array 
		  })
		  .catch((err) => console.log(err));


		  firebase.auth().onAuthStateChanged((user)=> {
			if (user) {
			  console.log(user.uid);
			  firebase.firestore().collection("userDetails").doc(user.uid)
				.get()
				.then((doc)=> {
				  console.log("Document data:", doc.data().name);
				  console.log("Document data:", doc.data().interests);
				  document.getElementById("username").innerHTML = doc.data().name ;
				  // Getting value from firebase
				})
				.catch(function(error) {
				
					history.push("/userhome");

				  console.log("Error getting document:", error);
				  console.log(user.id)
				})
			}})
	}
	onCollectionUpdate=(querySnapshot)=>{
		const offers=[];

		querySnapshot.forEach((doc)=>{
			const {Name, Description, Price, Expiry, category, Offer,imageurl}=doc.data();
			offers.push({
				key:doc.id,
				doc,
				Name,
				Description,
				Price,
				category,
				Expiry,
				Offer,
				imageurl,
				
			});
		});

		this.setState({offers});
	}

	checkAuth(){
		var user = firebase.auth().currentUser;
		if(localStorage.getItem('usersession')){

		}
		else if(user){
			localStorage.setItem('usersession', user);
			console.log("User "+user.uid+" is logged in with");

		
		}
		else{
			console.log("Successfully logged out");
			history.push("/");
		}

	}
  
  	logout(){
		firebase.auth().signOut().then((u)=>{
			localStorage.removeItem('usersession');
			history.push("/");
		})
		.catch((err)=>{
			console.log(err);
		});
	}

    render(){
  	return (
    <div className="App">
        <div><br></br></div>

        <div class="row">
        
        <div class="col-lg-3"><div class="mb-4 pt-3 card card-small">
          <div class="border-bottom text-center card-header">
              
	  <h4 class="mb-0" id="username">Name of User </h4>
              <br></br>
            
               <button onClick={() => history.push('/i1form')} class="mb-2 btn btn-outline-primary btn-sm btn-pill">
                   <i class="material-icons mr-1">View Subscribed Categories</i> </button>

				<button onClick={this.logout} class="mb-2 btn btn-outline-primary btn-sm btn-pill">
                   <i class="material-icons mr-1">LogOut</i> </button>
                   
                   </div><ul class="list-group list-group-flush"></ul></div></div>
                   <div className="col-lg-8">
	 <div className="row">

	  <div className="col-sm-5">
			  
			  
				{this.state.offers.map(offer=>
						  <div className="card-post mb-4 card card-small">

					<div className="card-body">
						<h5 className="card-title">
							{offer.Name}
						</h5>
						<img src= {offer.imageurl} alt="DealArena" width="100px" height="100px"/>
					<h5 className="card-title"> {offer.Description}</h5>					

					<h5 className="card-title">Category: {offer.category}</h5>

						</div>

						<div className="border-top d-flex card-footer">
							<div className="card-post__author d-flex">
								<a href="/" className="card-post__author-avatar card-post__author-avatar--small" >
						Offer: {offer.Offer} </a>
						<div className="d-flex flex-column justify-content-center ml-3"><span className="card-post__author-name">Rs.{offer.Price}</span><small className="text-muted"> Offer expires {offer.Expiry}</small></div></div><div className="my-auto ml-auto"><button className="btn btn-white btn-sm"><i className="far fa-bookmark mr-1"></i> Save</button></div></div></div>
					)
				}
	</div>
	<Sidebar/>

	  </div>

	  </div>
      </div>

</div>
  );

    }
  }

export default userhome;
