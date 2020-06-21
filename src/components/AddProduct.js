import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React,{Component} from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
// import {Button} from "react-bootstrap";
import firebase from "./Config";
import {Link} from "react-router-dom";

class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection("Offer Details");
        this.state={
            Name:"",
            Description:"",
            Expiry:"",
            Price:"",
            Category:"",
            
        }
    }

    onChange=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }


    onSubmit=(e)=>{
        e.preventDefault();
        const {Name, Description, Expiry, Price, Category}=this.state;
        this.ref.add({
            Name,
            Description,
            Expiry,
            Price,
            Category,
        }).then((docRef)=>{
            this.setState({
            Name:'',
            Description:"",
            Expiry:"",
            Price:"",
            Category:"",
        });
        this.props.history.push("/")
    })
    .catch((error)=>{
        console.error("Error adding document:",error);
    });

    }


    render(){
        const {Name, Description, Expiry, Price, Category}=this.state;
        return(
            <div>
                <Card>
                    <Link to="/">
                        <button>Show Product</button>
                    </Link>
                </Card>

                <div>
                    <div>
                        <div class="form-group"></div>
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" name="Name" value ={Name} onChange={this.onChange} placeholder="Name"></input>
                    </div>
                    <div>
                        <div class="form-group"></div>
                        <label for="Description">Description:</label>
                        <textArea class="form-control" name="Description"  onChange={this.onChange} placeholder="Description">{Description}</textArea>
                    </div>
                    <div>
                        <div class="form-group"></div>
                        <label for="description">Price</label>
                        <textArea class="form-control" name="Price" onChange={this.onChange} placeholder="Price">{Price}</textArea>
                    </div>
                    <div>
                        <div class="form-group"></div>
                        <label for="Expiry">Expiry</label>
                        <textArea class="form-control" name="Expiry" onChange={this.onChange} placeholder="Expiry">{Expiry}</textArea>
                    </div>
                    <div>
                        <div class="form-group"></div>
                        <label for="Category">Category</label>
                        <textArea class="form-control" name="Category" onChange={this.onChange} placeholder="Category">{Category}</textArea>
                    </div>
                </div> 

                <div className="Buttons">
                    <button class="Submit-Button" onClick={this.onSubmit}>SaveAll </button>
                </div>
            </div>
        )
    }
}

export default AddProduct;