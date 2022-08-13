import './Popup.css'
import { Component } from 'react'

export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  show(visible) {
    this.setState({ visible })
  }

  render() {
    const suffix = this.state.visible ? 'popup-show' : ''
    return (
      <div className={`popup ${suffix}`}>
        {this.props.children}
      </div>
    )
  }
}