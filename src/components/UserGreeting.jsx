import React from 'react'
import PropTypes from 'prop-types'

export const UserGreeting = (props) => {

    const welcomemessage =  <h2 className='welcome-message'>Welcome {props.username}</h2>
    const loginprompt = <h2 className='login-prompt'>Please log in</h2>

    return (props.isLoggedIn ? welcomemessage : loginprompt)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}