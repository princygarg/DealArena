import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';

class Home extends Component{
    render(){
        return(
            <div>
                <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/i1signup')}>User SignUp</Button>

                    <Button variant="btn btn-success" onClick={() => history.push('/i2signup')}>Product Owner SignUp</Button>
                </form>
            </div>
        );
    }
}

export default Home;