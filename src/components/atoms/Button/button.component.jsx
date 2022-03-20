import { Button as NativeButton } from 'native-base'
import React from 'react'


const Button = (props) => {
  return (
      <NativeButton>
          {props.title}
      </NativeButton> 
  )
}

export default Button