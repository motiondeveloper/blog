import React from "react"

const Emoji = ({ name, emoji }) => {
  return (
    <span role="img" aria-label={name}>
      {emoji}
    </span>
  )
}

export default Emoji
