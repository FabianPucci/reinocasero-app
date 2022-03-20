import { View, Text } from 'react-native'
import React from 'react'
import styles from './inputAndHour.style';
import TextInput from '../../atoms/TextInput/textInput.component';
import DatePicker from 'react-native-datepicker';

const InputAndHour = (props) => {

  return (
    <View style={styles.container}>
        <TextInput placeholder="Cliente" value={props.value} onChangeText={props.onChangeText} />
        <DatePicker 
          mode='time'
          style={styles.timePicker}
          date={props.date}
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          showIcon={false}
          onDateChange={props.onDateChange}
          useNativeDriver={false}
        />
    </View>
  )
}

export default InputAndHour