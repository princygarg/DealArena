import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBFormInline} from 'mdbreact';

class i1signup extends Component{
    render(){
        return(
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard>
                    <div className="header pt-3 peach-gradient">
                      <MDBRow className="d-flex justify-content-center">
                        <h3 className="white-text mb-3 pt-3 font-weight-bold"> Sign Up </h3>
                      </MDBRow>
                    </div>

                    <MDBCardBody className="mx-4 mt-4">
                      <MDBInput label="Your name" group type="text" validate />
                      <MDBInput label="Your email" group type="text" validate />
                      <MDBInput label="Your password" group type="password" validate />

                      {/* <div>
                        <p>Interested in seeing ads or publishing your own ads?</p>
                        <select className="browser-default custom-select">
                          <option>Select an option</option>
                          <option value="1">Seeing ads</option>
                          <option value="2">Publishing ads</option>
                        </select>
                      </div> */}
{/* 
                      <br />

                      <MDBFormInline>
                        <h7>Interested in -   </h7>
                        <MDBInput label='ads' type='radio' id='radio1' containerClass='mr-5' />
                        <MDBInput label='deals' type='radio' id='radio2' containerClass='mr-5' />
                        <MDBInput label='both' type='radio' id='radio3' containerClass='mr-5' />
                      </MDBFormInline> */}

                      <MDBInput label="Age" group type="number" validate />
                      <MDBInput label="Gender" group type="text" validate />
                      <MDBInput label="Marital Status" group type="text" validate />
                      <MDBInput label="Occupation" group type="text" validate />
                      <MDBInput label="Nationality" group type="text" validate />

                      <div>
                        <h7>Select your interests: </h7>
                        <MDBFormInline>
                          <MDBInput label='shoes' type='checkbox' id='checkbox1' containerClass='mr-5' />
                          <MDBInput label='electronics' type='checkbox' id='checkbox2' containerClass='mr-5' />
                          <MDBInput label='flights' type='checkbox' id='checkbox3' containerClass='mr-5' />
                        </MDBFormInline>
                      </div>
                      
                      {/* <p className="font-small grey-text d-flex justify-content-center">
                        <a href="#!" className="dark-grey-text ml-1 font-weight-bold" > Forgot Password? </a>
                      </p> */}

                      <div className="text-center">
                        <MDBBtn href="/userhome" color="grey" rounded type="button" className="z-depth-1a" > Sign Up </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        );
    }
}

export default i1signup;