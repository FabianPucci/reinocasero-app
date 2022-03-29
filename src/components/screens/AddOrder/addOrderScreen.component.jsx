import { View } from "react-native";
import React, { useState } from "react";
import InputAndHour from "../../molecules/InputAndHour/inputAndHour.component";
import styles from "./addOrderScreen.style";
import { Button } from "native-base";
import AddMenuItem from "../../molecules/AddMenuItem/addMenuItem.component";
import Subtitle from "../../atoms/Subtitle/subtitle.component";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const AddOrderScreen = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [menues, setMenues] = useState([]);
  const [hourText, setHourText] = useState("empty");

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateValue(currentDate);

    const tempDate = new Date(currentDate);
    const finalTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setHourText(finalTime);
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
          text={`${menues.length} menúes agregados para las ${hourText}`}
        />
        <AddMenuItem />
      </View>
    </View>
  );
};

export default AddOrderScreen;
