import { View } from "react-native";
import React, { useState } from "react";
import InputAndHour from "../../molecules/InputAndHour/inputAndHour.component";
import styles from "./addOrderScreen.style";
import AddMenuItem from "../../molecules/AddMenuItem/addMenuItem.component";
import Subtitle from "../../atoms/Subtitle/subtitle.component";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Title from "../../atoms/Title/title.component";

const AddOrderScreen = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [menues, setMenues] = useState([]);

  const handleDate = () => {
    DateTimePickerAndroid.open({
      testID: "dateTimePicker",
      value: dateValue,
      mode: "time",
      is24Hour: true,
      display: "default",
      onChange,
    });
  };
  const getDeliveryTime = () => {
    return dateValue.getHours() + ":" + dateValue.getMinutes();
  };

  const onChange = (event, selectedDate) => {
    setDateValue(selectedDate);
  };

  const handleInput = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <InputAndHour
          date={dateValue}
          onChangeDate={handleDate}
          value={inputValue}
          onChangeText={handleInput}
        />
        <Subtitle
          text={`${
            menues.length
          } menúes agregados para las ${getDeliveryTime()}`}
        />
        <AddMenuItem />
      </View>
      <Title style={styles.title} text="texto pasado x prop" />
    </View>
  );
};

export default AddOrderScreen;
