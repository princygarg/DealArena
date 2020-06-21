// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import React,{Component} from 'react';
// import '../App.css';
// import { Card } from 'react-bootstrap';
// import {Button} from "react-bootstrap";
import firebase from "./Config";
// import {Link} from "react-router-dom";

class AddProduct extends Component{
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
        this.props.history.push("/productownerhome")
    })
    .catch((error)=>{
        console.error("Error adding document:",error);
    });

    }


    render(){
        const {Name, Description, Expiry, Price, Category}=this.state;
        
        const divStyle = {
            margin: '40px'
        };
        const bottomStyle = {
            margin: '20px'
        };
        return(
            <div style={divStyle}>
                {/* <Card class="col-sm-9"> */}
                    {/* <Link to="/productownerhome">
                        <button>Show Products</button>
                    </Link> */}
                {/* </Card> */}

                <div id="formbutton" className="Buttons" style={bottomStyle}>
                    <button type="submit" class="btn btn-primary" onClick={this.onSubmit}> Show Products </button>
                </div>

                <div>
                    <div>
                        <div class="form-group row"></div>
                        {/* <label class="sol-sm-3" for="Name">Name</label> */}
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="Name" value ={Name} onChange={this.onChange} placeholder="Name"></input>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row"></div>
                        {/* <label for="Description">Description:</label> */}
                        <div class="col-sm-9">
                        <textArea class="form-control" name="Description"  onChange={this.onChange} placeholder="Description">{Description}</textArea>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row"></div>
                        {/* <label for="description">Price</label> */}
                        <div class="col-sm-9">
                        <textArea class="form-control" name="Price" onChange={this.onChange} placeholder="Price">{Price}</textArea>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row"></div>
                        {/* <label for="Expiry">Expiry</label> */}
                        <div class="col-sm-9">
                        <textArea class="form-control" name="Expiry" onChange={this.onChange} placeholder="Expiry">{Expiry}</textArea>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row"></div>
                        {/* <label for="Category">Category</label> */}
                        <div class="col-sm-9">
                        <textArea class="form-control" name="Category" onChange={this.onChange} placeholder="Category">{Category}</textArea>
                        </div>
                    </div>
                </div> 

                <div id="formbutton" className="Buttons" class="justify-content-between" style={bottomStyle}>
                    <button type="submit" class="btn btn-primary" onClick={this.onSubmit}> SaveAll </button>
                </div>
            </div>
        )
    }
}

export default AddProduct;