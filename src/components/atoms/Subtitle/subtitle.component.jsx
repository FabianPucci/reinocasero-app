import React from 'react'
import { Heading } from 'native-base'

const Subtitle = (props) => {
  return (
      <Heading size={'sm'}>{props.text}</Heading>
  )
}

export default Subtitle