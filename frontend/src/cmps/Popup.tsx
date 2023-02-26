import React from 'react'
type PopUpProps = {
    msg:string
    removeImageApproved: Function
}
function Popup(props: PopUpProps) {
    const {msg} = props
  return (
    <div className="popup-screen">
        <div className="popup">
            <button className='popup-close'>X</button>
            <h2>{msg}</h2>
            <div className="popup-options">
                <button>Cancel</button>
                <button>confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Popup