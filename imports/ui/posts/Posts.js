import React, { Component } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Meteor } from 'meteor/meteor';
import { Redirect, Link } from 'react-router-dom'

class CreatePost extends Component{
    state = {
        post: '',
        latitude: '',
        longitude:''
    }
    createPost = e => {
        e.preventDefault()
        const { post, latitude, longitude } = this.state
        
    }
    getPosition = position => {
        const { longitude, latitude } = position.coords
        this.setState({
            latitude,
            longitude
        })
    }
    handleError = error => {
        this.setState({
            error
        })
    }
    getText = () => {}
    componentDidMount(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(this.getPosition, this.handleError)  
          } else {
            console.log('location is not enabled on this browser')
          }
    }

    render(){
        const { post } = this.state
        return(
            <Form>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="post">Create a post </Label>
                    <Input 
                        type="textarea" 
                        name="text" 
                        id="post" 
                        value={post}
                        onChange={this.getText}
                        />
                    </FormGroup>
                </Col>

            </Row>
            <Row>
            <Button 
                onClick={this.createPost}
                color="primary">CreatePost
            </Button>
            </Row>
 
          </Form>
        )
    }
}

export default CreatePost;