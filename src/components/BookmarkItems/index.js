import './index.css'

const BookmarkItems = props => {
  const {userDetails, showPassword, onDeletion} = props
  const {id, website, username, password} = userDetails
  const colorList = [
    'yellow',
    'green',
    'orange',
    'dark-green',
    'red',
    'blue',
    'grey',
  ]
  const classValue = colorList[Math.floor(Math.random() * 7)]

  const deleteUser = () => {
    onDeletion(id)
  }

  const showNewPassword = () =>
    showPassword ? (
      password
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars-logo"
      />
    )

  return (
    <li className="bookmark-items-container">
      <div className={`bookmark-items-logo ${classValue}`}>
        {website[0].toUpperCase()}
      </div>
      <div className="bookmark-items-details-container">
        <p className="bookmark-items-details">{website}</p>
        <p className="bookmark-items-details">{username}</p>
        <p className="bookmark-items-details">{showNewPassword()}</p>
      </div>
      <button
        className="delete-btn"
        onClick={deleteUser}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BookmarkItems
