import React from 'react'

const Button = ({color,bgColor,borderRadius,text,size}) => {
  return (
    <button style={{backgroundColor:bgColor,color,borderRadius}} type="button" className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button