import { Mongo } from 'meteor/mongo'

const Posts = new Mongo.Collection('posts')


// The schema to be added

export { Posts }