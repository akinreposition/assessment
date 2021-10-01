import React from 'react'
const Popup = props => {   
    return (props.trigger) ? (
        <div className="popup">
            <div className="pop-inner_sm">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;