import React from 'react'
import { Input } from 'native-base'

const TextInput = (props) => {
  return (
      <Input variant={'outline'} size={'lg'} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} />
  )
}

export default TextInput