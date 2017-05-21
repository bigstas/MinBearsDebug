/* Deliberately exposing all of them in global name space */
var h = React.createElement;
var MyList =  React.createClass({
  render: function(){
    var lis = this.props.data.map(function(text, idx){
      return h('li', {key:idx }, text)
    })
    return (
      h('ul', null, lis)
    )
  }
})

var HelloWorldBanner =  React.createClass({
  render: function(){
    return (
      h('div', null, 
        h('h1', null, 'Hello World'),
        h(MyList, {data:['hi','I am','Mozilla']})
       )
    )
  }
})
/*
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
                h('Slider', {value: this.state.volume, orientation: "vertical", onChange: this.handleOnChange}, null)
        )
    }
})
*/

class VolumeSlider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }

  handleOnChange(value) {
    this.setState({
      volume: value
    })
  }

  render() {
    let { volume } = this.state
    return (
      h('Slider', {value: this.state.volume, min: 0, max: 100, orientation: "vertical", onChange: this.handleOnChange}, null)
    )
  }
}


ReactDOM.render(h('div', null, 
                  h('p', {style: {color: 'red', width: '100px'}}, 'Hello'),
                  h('Slider', {min: 10, max: 100}), 
                  h('VolumeSlider', {style: {width: '100px'}}),
                  h('p', null, 'World')
                 ), document.getElementById('content'))