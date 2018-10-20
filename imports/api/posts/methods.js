import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Posts } from './posts'

Meteor.methods({
    createPost(post){
        check(post, Object)
        Posts.insert(post)
    }
})