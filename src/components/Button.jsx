import React from 'react'

const Button = ({color,bgColor,borderRadius,text,size,width}) => {
  return (
    <button style={{backgroundColor:bgColor,color,borderRadius}} type="button" className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}>
      {text}
    </button>
  )
}

export default Button