import { View, Text } from 'react-native'
import React from 'react'
import { TextArea } from 'native-base'

const TextBox = (props) => {
  return (
      <TextArea placeholder={props.placeholder} size={'lg'} />
  )
}

export default TextBox