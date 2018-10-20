import Meteor from 'meteor/meteor'
import { Check } from 'meteor/check'
import { Posts } from './posts'

Meteor.methods({
    createPost(post){
        Check(post, Object)
        Posts.insert(post)
    }
})