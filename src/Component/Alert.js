import React from 'react'

export default function Alert(props) {
 
    const changeToCaptelize = (message) => {
        return message[0].toUpperCase() + message.slice(1).toLowerCase();
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{changeToCaptelize(props.alert.type)}: </strong> {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
