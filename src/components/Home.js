import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';

class Home extends Component{
    render(){
        return(
            <MDBContainer>
              <MDBRow>
                <MDBCol md="500">
                  <MDBCard>
                    <div className="header pt-3 peach-gradient">
                      <MDBRow className="d-flex justify-content-center">
                        <h1 className="white-text mb-3 pt-3 font-weight-bold"> Deal Arena </h1>
                      </MDBRow>
                    </div>

                    <MDBCardBody className="mx-4 mt-4">
                      <MDBInput label="Your Email" group type="text" validate />
                      <MDBInput label="Your Password" group type="password" validate />

                      {/* <div>
                        <p>Log-in as:</p>
                        <select className="browser-default custom-select">
                          <option value="1">User</option>
                          <option value="2">Product/Service Owner</option>
                        </select>
                      </div> */}

                      <br />

                      <div>
                        <form>
                            <Button variant="btn btn-success" onClick={() => history.push('/userhome')}>User Login</Button>

                            <Button variant="btn btn-success" onClick={() => history.push('/i2signup')}>Product Owner Login</Button>
                        </form>
                      </div>  

                      <br />
                      <br />
                    
                      <div>
                        <p> Don't have an account?</p>
                        <form>
                            <Button variant="btn btn-success" onClick={() => history.push('/i1signup')}>User SignUp</Button>

                            <Button variant="btn btn-success" onClick={() => history.push('/i2signup')}>Product Owner SignUp</Button>
                        </form>
                      </div>  
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

           
        );
    }
}

export default Home;