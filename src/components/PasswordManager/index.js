import {Component} from 'react'
import AddPassword from '../AddPassword'
import YourPasswords from '../YourPasswords'
import './index.css'

class PasswordManager extends Component {
  state = {userDetails: []}

  onDeletedMain = id => {
    const {userDetails} = this.state
    const modifiedUserDetails = userDetails.filter(
      eachItem => id !== eachItem.id,
    )
    this.setState({
      userDetails: modifiedUserDetails,
    })
  }

  updateUserDetails = data => {
    const {userDetails} = this.state
    console.log(data)
    this.setState({userDetails: [...userDetails, data]})
  }

  render() {
    const {userDetails} = this.state
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <AddPassword updateUserDetails={this.updateUserDetails} />
        <YourPasswords
          userDetails={userDetails}
          onDeletedMain={this.onDeletedMain}
        />
      </div>
    )
  }
}

export default PasswordManager
