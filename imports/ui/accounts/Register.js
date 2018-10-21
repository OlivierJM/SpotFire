import React, { Component, Fragment } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Accounts } from 'meteor/accounts-base';
import { Redirect, Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

class Register extends Component{
    state = {
        email: '',
        pass:'',
        name: '',
        confirmPass: ''
    }

    getText = ({ target: { value }}, type) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: value
                })
                break
            case 'pass':
                this.setState({
                    pass: value
                })
                break
            case 'name':
                this.setState({
                    name: value
                })
                break
            case 'pass-confirm':
                this.setState({
                    confirmPass: value
                })
                break
            default:
                break;
        }

    }
    registerUser = () => {
        const { email, pass, name, confirmPass } = this.state;

        // check the password before creating the user
        const user = {
            email,
            password: pass,
            profile: {
                name
            }
        }
        Accounts.createUser(user, err => {
            err ? console.log(err.reason) : <Redirect to='/'/>
        })

    }


    render(){
        const { email, pass, name, confirmPass } = this.state
        return(
            <Fragment>
            <Header />
            <Container>
            <Form>
            <Row form>
            <Col md={6}>
            <Label for="exampleEmail">Name</Label>
                <Input
                    type="name"
                    value={name}
                    placeholder="Name"
                    onChange={e => this.getText(e, 'name')}
                />
                </Col>
            </Row>
            <Row>
            <Col md={6}>
                <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        value={email}
                        placeholder="Email"
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
            <Row>
            <Col md={6}>
                <Label for="exampleEmail">Password</Label>
                    <Input
                        type="password"
                        value={confirmPass}
                        placeholder="Confirm Password"
                        onChange={e => this.getText(e, 'pass-confirm')}
                    />
                </Col>
            </Row>
            <br />
            <Row>
            <Button
                    onClick={this.registerUser}
                    color="primary">Register</Button>
            </Row>
            <Link to='/login'>Login here </Link>
          </Form>
          </Container>
          <Footer/>
          </Fragment>
        )
    }
}

export default Register;
