import React, { Component } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Accounts } from 'meteor/accounts-base';

class Login extends Component{
    state = {
        email: '',
        pass:''
    }

    getText = ({ target: { value }}, type) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: value
                })
                break;
            case 'pass':
                this.setState({
                    pass: value
                })
            default:
                break;
        }
    
    }
    registerUser = () => {
        const { email, pass } = this.state;
        // login in the user
        Meteor.loginWithPassword(email, pass, err => {
            err ? console.log(err.reason) : console.log('successfully loggedn in the user')
        })

    }


    render(){
        const { email, pass } = this.state
        return(
            <Form>
            <Row form>
                <Col md={6}>
                <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        value={email}
                        placeholder="with a placeholder"
                        onChange={e => this.getText(e, 'email')}
                    />
                </Col>
                <Col md={6}>
                <Label for="exampleEmail">Password</Label>
                    <Input
                        type="email"
                        value={pass}
                        placeholder="with a placeholder"
                        onChange={e => this.getText(e, 'pass')}
                    />
                </Col>
                <Button 
                    onClick={this.loginUser}
                    color="primary">Login</Button>
            </Row>
          </Form>
        )
    }
}

export default Login;