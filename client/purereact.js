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

ReactDOM.render(React.createElement(VolumeSlider), document.getElementById('content'))