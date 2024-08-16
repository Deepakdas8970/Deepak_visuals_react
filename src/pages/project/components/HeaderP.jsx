import React from 'react'

const HeaderP = ({name}) => {
  return (
   <>
  
      <div className="row">
        <div 
          className="col-12 text-center py-2 text-white" 
          style={{ background: '#3511E8' }}
        >
          <h1>{name}</h1>
        </div>
      </div>
   </>
  )
}

export default HeaderP