/*
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/

// Meteor startup script. Runs reactRoutes, and puts the result in the 'content' div in index.html.

import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import React from 'react'

const Hello = React.createClass({
    render() {
        return(
            <p>Hello World</p>
        )
    }
})
    
    
Meteor.startup(() => {
    render(
        <Hello />,
        document.getElementById('content'))
})