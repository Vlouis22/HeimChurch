import React from 'react'

export default function PaymentButton({text, color, bgColor, to, specialclassName}) {

    const fullClassName = 'payment--button ' + specialclassName

  return (
    <a href={to} target='_blank' className={fullClassName} style={{color: color, backgroundColor: bgColor}}>
        {text}
    </a>
  )
}
