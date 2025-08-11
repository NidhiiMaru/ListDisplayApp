import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

export default function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; //hardcoded array of fruit names
  const [inputValue, setInputValue] = useState("");
  //Declares a state variable called inputValue with an initial value of an empty string "".
  //setInputValue is the function you call to update inputValue.
  return (
    <ScrollView contentContainerStyle={styles.container}>
    //The contentContainerStyle applies styles to the inner content wrapper
      <Text style={styles.heading}>🍓 Fruit List</Text>

      {fruits.map((fruit, index) => ( //for each item view component is returned 
        //For each fruit map is udes to return a styled box containing the fruit’s name.
        <View key={index} style={styles.itemBox}>
          <Text style={styles.itemText}>{fruit}</Text>
        </View>
      ))}

      <Text style={styles.heading}> Enter Something</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputValue}
        onChangeText={setInputValue} //updating the state.
      />
      {inputValue ? <Text style={styles.preview}>You typed: {inputValue}</Text> : null}  
          //renders the line "You typed: ..." only if inputValue is not empty.
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  itemBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 10,
  },
  preview: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
