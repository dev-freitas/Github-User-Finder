import React from 'react'

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i class="fas fa-info-circle"></i> { alert.msg }
        </div>
    )
  )
}

export default Alert
