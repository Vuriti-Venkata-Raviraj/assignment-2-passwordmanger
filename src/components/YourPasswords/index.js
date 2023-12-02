import {Component} from 'react'
import BookmarkItems from '../BookmarkItems'
import './index.css'

class YourPasswords extends Component {
  state = {showPassword: false, searchValue: ''}

  onDeletion = id => {
    const {onDeletedMain} = this.props
    onDeletedMain(id)
  }

  showPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {userDetails} = this.props
    const {showPassword, searchValue} = this.state
    const modifiedUserDetails = userDetails.filter(eachUser =>
      eachUser.website
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim()),
    )
    const count = modifiedUserDetails.length

    return (
      <div className="your-password-container">
        <div className="your-password-title-container">
          <div className="your-password-title-value-container">
            <h1 className="your-password-title">Your Passwords </h1>
            <p className="count"> {count}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-details"
              onChange={this.onChangeSearch}
              value={this.searchValue}
            />
          </div>
        </div>
        <hr />
        <div className="show-password-container">
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.showPassword}
          />
          <label className="show-password-text" htmlFor="showPassword">
            Show Passwords
          </label>
        </div>
        <div className="display-bookmarks-container">
          {count === 0 ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="not-found-logo"
              />
              <p className="no-password-text">No Passwords</p>
            </>
          ) : (
            <ul>
              {modifiedUserDetails.map(items => (
                <BookmarkItems
                  userDetails={items}
                  showPassword={showPassword}
                  onDeletion={this.onDeletion}
                  key={items.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default YourPasswords
