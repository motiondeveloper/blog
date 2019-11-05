import React from "react"

function Emoji({name, emoji}) {
    return (
        <span role="img" aria-label={name}>{emoji}</span>
    )
}

export default Emoji