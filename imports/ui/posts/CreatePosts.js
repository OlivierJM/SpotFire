import React, { Component, Fragment } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input, Container, Alert } from "reactstrap";
import { Meteor } from 'meteor/meteor';
import { Redirect, Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Posts } from '../../api/posts/posts'
import { Post } from './Post'
import Header from '../components/header'
import Footer from '../components/footer'

class CreatePost extends Component{
    state = {
        post: '',
        latitude: '',
        longitude:'',
        title: '',
        name: ''
    }
    createPost = e => {
        e.preventDefault()
        const { post, latitude, longitude, title } = this.state
        const user = Meteor.user()

        // to be done on the server
        const postDetails = {
            title,
            post,
            latitude,
            longitude,
            authorName: user.profile.name,
            author: Meteor.userId(),
            createdAt: new Date()
        }
        Meteor.call('createPost', postDetails, err => {
            err ? console.log(err.reason)
            :
            // clear the fields
            this.setState({
                post: '',
                title: ''
            })
        })

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
    getText = ({ target: { value } }) => {
        this.setState({
            post: value
        })
    }
    getTitle = ({ target: { value } }) => {
        this.setState({
            title: value
        })
    }
    componentDidMount(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(this.getPosition, this.handleError)
          } else {
            console.log('location is not enabled on this browser')
          }
    }


    render(){
        const { post, title } = this.state
        const { posts } = this.props
        return(
            <Fragment>
             <Header />
            <Container>
            <Form>
            <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="post">Title </Label>
                    <Input
                        type="text"
                        value={title}
                        onChange={this.getTitle}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="post"> Post </Label>
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
            <br />
            <br />
            <Row>
                {
                    posts.length ? posts.map(post => (
                        <Post
                            key={post._id}
                            post={post.post}
                            authorName={post.authorName}
                            title={post.title}
                            />
                    ))
                    :
                    <Alert color="dark">
                        No Posts yet
                    </Alert>
                }
            </Row>
          </Form>
          </Container>
          <Footer/>
          </Fragment>
        )
    }
}

export default withTracker(() => {

    return {
        posts: Posts.find({}).fetch()
    }
})(CreatePost)
