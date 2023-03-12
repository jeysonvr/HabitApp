import React from 'react'
import './AddButton.css'

interface AddButtonProps {
  clickHandler: () => void;
  type?: string;
  className?: string;
  iconPath?: string;
}

const AddButton = ({ clickHandler, type, className, iconPath }: AddButtonProps) => {
  return (
    <button
      className={`circle ${type} ${className}`}
      onClick={clickHandler}
    >
      <img src={`assets/img/${iconPath}`} />
    </button>
  )
}

export default AddButton
