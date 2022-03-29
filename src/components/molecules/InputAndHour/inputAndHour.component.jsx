import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./inputAndHour.style";
import TextInput from "../../atoms/TextInput/textInput.component";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const InputAndHour = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cliente"
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <Button onPress={props.onChangeDate} title="horario de entrega" />
    </View>
  );
};

export default InputAndHour;
