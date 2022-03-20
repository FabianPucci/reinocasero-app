import { View } from 'react-native'
import React, {useState} from 'react'
import InputAndHour from '../../molecules/InputAndHour/inputAndHour.component'
import styles from './addOrderScreen.style';
import { Button } from 'native-base';
import AddMenuItem from '../../molecules/AddMenuItem/addMenuItem.component';
import Subtitle from '../../atoms/Subtitle/subtitle.component';

const AddOrderScreen = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [menues, setMenues] = useState([]);

  const handleDate = (time) => {
    console.log(time)
    setDateValue(time);
  };

  const handleInput = text => {
    setInputValue(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <InputAndHour date={dateValue} onDateChange={handleDate} value={inputValue} onChangeText={handleInput} />
        <Subtitle text={`${menues.length} menúes agregados`} />
        <AddMenuItem />
      </View>
    </View>
  )
}


export default AddOrderScreen