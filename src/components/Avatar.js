import React from 'react'

function Avatar(props) {
    // Components props should be named from their own point of view, not from where they may be rendered
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

export default Avatar