import React from 'react'

function Message({msg,bgColor}) {
    const styles={
        padding:"1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor:bgColor
    }
  
    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}

export default Message
