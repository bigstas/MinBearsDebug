import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import React from 'react'
import Slider from 'react-rangeslider'
import { Component } from 'react'


const VolumeSlider = React.createClass({
    getInitialState() {
        return {
            volume: 0
        }
    },

    handleOnChange(value) {
        this.setState({
            volume: value
        })
    },

    render() {
        return (
                <Slider
                value={this.state.volume}
                orientation="vertical"
                onChange={this.handleOnChange}
                />
        )
    }
})

Meteor.startup(() => {
    render(
        <VolumeSlider />,
        document.getElementById('content'))
})