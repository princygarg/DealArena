
import React,{Component} from 'react';
import Sidebar from "./sidebar.js"
import firebase from "./Config";

import history from './../history';

class userhome extends Component{
	constructor(props){
		super(props);
		this.ref=firebase.firestore().collection("Offer Details")
		this.unsubscribe=null;
		this.state={
			offers:[]
		};
	}
  
	componentDidMount(){
		const params = new URLSearchParams(this.props.location.search);

		const category = params.get("category");
		var offers = firebase.firestore().collection("Offer Details");
		if (category) offers = offers.where("category", "==", category);
		offers
		  .get()
		  .then((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => doc.data());
			this.setState({ offers: data }); // array 
		  })
		  .catch((err) => console.log(err));
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
  
  	// logout(){
	// 	firebase.auth().signOut().then((u)=>{
	// 		console.log("zzzzzzzzz");
	// 		this.props.history.push("/");
	// 	})
	// 	.catch((err)=>{
	// 		console.log(err);
	// 	});
	// }

    render(){
  	return (
    <div className="App">
        <div><br></br></div>

        <div class="row">
        
        <div class="col-lg-3"><div class="mb-4 pt-3 card card-small">
          <div class="border-bottom text-center card-header">
              <div class="mb-3 mx-auto">
                  <img class="rounded-circle" alt="DealArena" src="" width="80"/>
              </div>
              <h4 class="mb-0">User/Ad-Seeker Name</h4>
              <br></br>
            
               <button onClick={() => history.push('/i1form')} class="mb-2 btn btn-outline-primary btn-sm btn-pill">
                   <i class="material-icons mr-1">View Subscribed Categories</i> </button>

				{/* <button onClick={this.logout} class="mb-2 btn btn-outline-primary btn-sm btn-pill">
                   <i class="material-icons mr-1">LogOut</i> </button> */}
                   
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
