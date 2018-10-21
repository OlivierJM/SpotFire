import React, { Component, Fragment } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Meteor } from 'meteor/meteor';
import { Redirect, Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

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
    loginUser = e => {
        e.preventDefault()
        const { email, pass } = this.state;
        // login in the user
        //
        Meteor.loginWithPassword(email, pass, err => {
            err ? console.log(err.reason) : <Redirect to='/'/>
        })

    }


    render(){
        const { email, pass } = this.state
        return(
            <Fragment>
            <Header />
            <Container>
            <Form>
            <Row form>
                <Col md={6}>
                <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        value={email}
                        placeholder="Email "
                        onChange={e => this.getText(e, 'email')}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <Label for="exampleEmail">Password</Label>
                    <Input
                        type="password"
                        value={pass}
                        placeholder="Password"
                        onChange={e => this.getText(e, 'pass')}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Button
                    onClick={this.loginUser}
                    color="primary">Login</Button>
            </Row>

            <Link to='/register'>Register here </Link>
          </Form>
          </Container>
          <Footer/>
          </Fragment>
        )
    }
}

export default Login;
