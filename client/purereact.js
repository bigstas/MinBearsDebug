var h = React.createElement

// from the demo provided in the readme
/*
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
*/

ReactDOM.render(h('div', null, 
                  h('Slider', {min: 10, max: 100})   
                 ), document.getElementById('content'))