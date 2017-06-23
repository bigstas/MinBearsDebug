import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import React from 'react'
import { Component } from 'react'

import RangeSlider from 'reactrangeslider'

Meteor.startup(() => {
    render(
        <RangeSlider />,
        document.getElementById('content'))
})