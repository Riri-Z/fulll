import React from 'react'
import PropTypes from 'prop-types';
import "./UserCard.css"


export const UserCard = ({name, avatar}) => {

  return (
    <div className="UserCard" >
    <img src={avatar} alt={avatar} width="50" height="50" />
    <p >{name ? name : "No name"}</p>
  </div>
  )
}


UserCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};