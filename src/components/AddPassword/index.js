import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class AddPassword extends Component {
  state = {website: '', username: '', password: ''}

  onChangeEmail = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    console.log('submitted')
    const {updateUserDetails} = this.props
    const {website, username, password} = this.state
    const data = {id: v4(), website, username, password}
    console.log(data)
    updateUserDetails(data)
    this.setState({website: '', username: '', password: ''})
  }

  renderAddPassword = () => {
    const {website, username, password} = this.state
    return (
      <div className="add-user-details-container">
        <h1 className="add-user-details-title">Add New Password</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="add-user-details-elements">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="addDetailsLogo"
            />
            <input
              type="text"
              placeholder="Enter Website"
              className="input-details"
              value={website}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="add-user-details-elements">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="addDetailsLogo"
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="input-details"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="add-user-details-elements">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="addDetailsLogo"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-details"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="add-password-container">
        {this.renderAddPassword()}
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="password-manager-logo"
        />
      </div>
    )
  }
}

export default AddPassword
