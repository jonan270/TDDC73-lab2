import { StyleSheet, View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Card from './assets/components/Card.js'


export default function App() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardHolder, setCardHolder] = useState("FIRSTNAME SURNAME");
  const [expire, setExpire] = useState("00/00");

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={input => setCardNumber(input)}
          placeholder="Card number"
        />
        <TextInput
          style={styles.input}
          onChangeText={input => setCardHolder(input)}
          placeholder="Card holder"
        />
        <TextInput
          style={styles.input}
          onChangeText={input => setExpire(input)}
          placeholder="Expires"
        />
      </View>
      <Card
        cardHolder = {cardHolder}
        cardNumber = {cardNumber}
        expires = {expire}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e6f2',
    alignItems: 'center',
    padding: 100,
  },
  inputView: {
    marginTop: 300,
    position: 'absolute',
    padding: 30,
    height: '75%',
    width: 300,
    bottom: 100,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});
