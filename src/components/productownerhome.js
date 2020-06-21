import 'bootstrap-css-only/css/bootstrap.min.css';
import React,{Component} from 'react';
import firebase from "./Config";
// import {Link} from "react-router-dom";
import history from './../history';

class productownerhome extends Component{
    constructor(props){
		super(props);
		this.ref=firebase.firestore().collection("Offer Details")
		this.unsubscribe=null;
		this.state={
			offers:[]
		};
	}

	componentDidMount(){
		this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate);

	}

	onCollectionUpdate=(querySnapshot)=>{
		const offers=[];
		querySnapshot.forEach((doc)=>{
			const {Name, Description, Price, Expiry, Category}=doc.data();
		offers.push({
			key:doc.id,
			doc,
			Name,
			Description,
			Price,
			Category,
			Expiry,
		});
	});
	this.setState({offers});


	}

render() {
  return (
		<div>

<div class="row">
		
		<div class="col-lg-3"><div class="mb-4 pt-3 card card-small">
		  <div class="border-bottom text-center card-header">
			  <div class="mb-3 mx-auto">
				  <img class="rounded-circle" src="" alt="" width="80"/>
			  </div>
			  <h4 class="mb-0">Product/Service Owner Name</h4>
			  <br></br>
			  
				{/* <Link to= "/" > */}

					<button onClick={() => history.push('/addproduct')} class="mb-2 btn btn-outline-primary btn-sm btn-pill">
				   <i class="material-icons mr-1">Add product</i> </button>				
				{/* </Link> */}
				   </div>
				   </div>
				</div>
		
     <div class="col-lg-8">
	 <div class="row">

	  <div class="col-sm-5">
		  <div class="card-post mb-4 card card-small">
			  
			  <div class="card-body"><h5 class="card-title">Xiomi MiA1 </h5>
				<p class="card-text text-muted"> 4GB RAM 128 GB INTERNAL MEMORY</p>
				
			  </div>
		  <div class="border-top d-flex card-footer">
		  <div class="card-post__author d-flex">
			<a href="/" class="card-post__author-avatar card-post__author-avatar--small" >
	  Offer: 15% Off </a>
	  <div class="d-flex flex-column justify-content-center ml-3"><span class="card-post__author-name">Buy Now</span><small class="text-muted"> Offer expires 6th July 2020</small></div></div><div class="my-auto ml-auto"><button class="btn btn-white btn-sm"><i class="far fa-bookmark mr-1"></i> Save</button></div></div></div></div>

	  <div class="col-sm-5">
		  <div class="card-post mb-4 card card-small">
			  
			  <div class="card-body"><h5 class="card-title">Xiomi MiA1 </h5>
				<p class="card-text text-muted"> 4GB RAM 128 GB INTERNAL MEMORY</p>
				
			  </div>
		  <div class="border-top d-flex card-footer">
		  <div class="card-post__author d-flex">
			<a href="/" class="card-post__author-avatar card-post__author-avatar--small" >
	  Offer: 15% Off </a>
	  <div class="d-flex flex-column justify-content-center ml-3"><span class="card-post__author-name">Buy Now</span><small class="text-muted"> Offer expires 6th July 2020</small></div></div><div class="my-auto ml-auto"><button class="btn btn-white btn-sm"><i class="far fa-bookmark mr-1"></i> Save</button></div></div></div></div>


	  <div class="col-sm-5">
			  
			  
				{this.state.offers.map(offer=>
						  <div class="card-post mb-4 card card-small">

					<div class="card-body">
						<h5 class="card-title">
							{offer.Name}
						</h5>

					<h5 class="card-title"> {offer.Description}</h5>
					<h5 class="card-title">Category: {offer.Category}</h5>

						</div>

						<div class="border-top d-flex card-footer">
							<div class="card-post__author d-flex">
								<a href="/" class="card-post__author-avatar card-post__author-avatar--small" >
						Offer: 15% Off </a>
						<div class="d-flex flex-column justify-content-center ml-3"><span class="card-post__author-name">Rs.{offer.Price}</span><small class="text-muted"> Offer expires {offer.Expiry}</small></div></div><div class="my-auto ml-auto"><button class="btn btn-white btn-sm"><i class="far fa-bookmark mr-1"></i> Save</button></div></div></div>


					)
				};
	</div>



	  </div>

	  </div>


			</div>
		</div>


  )

}
}

export default productownerhome;