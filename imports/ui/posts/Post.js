import React from 'react'
import { Card, Col, CardBody, CardTitle, CardText, CardSubtitle, Badge } from "reactstrap";


const Post = ({ post, authorName, title}) => (
    <Col sm={4}>
        <Card>
        <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{post}</CardText>
        <CardSubtitle>{authorName} </CardSubtitle>
        <Badge color="danger">{'alert'}</Badge>
        </CardBody>
    </Card>
</Col>
    
)
export { Post }