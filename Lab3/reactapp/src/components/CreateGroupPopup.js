import React from 'react'

function CreateGroupPopup(props) {
  return (props.trigger) ? (
      <div className='popup'>
          <div className='popup-inner'>
              <button className='save-btn'>Save</button>
              {props.children}
          </div>
      </div>
  ) : '';
}

export default CreateGroupPopup