import React from 'react'


const Child = (props) => {
    const {message, onClickMessage} = props;

    const handleMessage = (message) => {
        if(message) {
            console.log(message)
        }
    }
    return (
        <ul>
            {
                props.message.map((message) => {
                    return (
                        <p onClick={() => handleMessage(message)}>{message}</p>
                    )
                })
            }
        </ul>
    )
}

export default Child