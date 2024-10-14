import React from "react";
import { useController } from "react-hook-form";
import { TextInput, StyleSheet } from "react-native";

export const Input = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  addStyle,
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput
      placeholder={placeholder}
      value={field.value}
      style={{ ...styles.textinput, ...addStyle }}
      onChangeText={field.onChange}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  textinput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});
