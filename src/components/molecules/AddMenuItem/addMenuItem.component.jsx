import { View, Text } from 'react-native'
import React from 'react'
import TextInput from '../../atoms/TextInput/textInput.component'
import styles from './addMenuItem.style'
import TextBox from '../../atoms/TextBox/textBox.component'
import Button from '../../atoms/Button/button.component'

const AddMenuItem = (props) => {
  return (
    <View style={styles.container}>
        <TextInput placeholder="Menú" />
        <TextBox placeholder="Comentarios" />
        <Button title="Agregar" />
    </View>
  )
}

export default AddMenuItem