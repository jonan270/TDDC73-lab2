import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

import Card from './assets/components/Card.js'


export default function App() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardHolder, setCardHolder] = useState("FIRSTNAME SURNAME");
  const [expire, setExpire] = useState("00/00");


  function renderRow (rowData) {
    return (
        <View >
          <Text style={styles.textDropdown} numberOfLines={1} ellipsizeMode={'tail'}>
            {rowData}
          </Text>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>Card Number</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={input => setCardNumber(input)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>Card Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={input => setCardHolder(input)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={[styles.inputText, {paddingBottom: 5, margin: 2.5}]}>Expiration date</Text>
          <View style={{width: '100%', flexDirection: 'row', alignItems: 'flex-start', }}>
            <Text style={[styles.inputText, {width: '33%', margin: 2.5}]}>Month</Text>
            <Text style={[styles.inputText, {width: '33%', margin: 2.5}]}>Year</Text>
            <Text style={[styles.inputText, {width: '33%', margin: 2.5}]}>CVV</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ModalDropdown style={[styles.input, {width: '30%'}]}
              options={['01', '02', '03', '04',
                        '05', '06', '07', '08',
                        '09', '10', '11', '12',]}
            />
            <ModalDropdown style={[styles.input, {width: '30%'}]}
              options={['2022', '2023', '2024', '2025',
                        '2026', '2027', '2028', '2029',
                        '2030', '2031', '2032', '2023',]}
            />
            <TextInput
              style={[styles.input, {width: '30%'}]}
              onChangeText={input => setExpire(input)}
            />
          </View>
        </View>
        <View style={{width: '100%', margin: 15,}}>
          <Button
            title="SUBMIT"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
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
    height: '85%',
    width: 300,
    bottom: 0,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputRow : {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText : {
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  input: {
    borderColor: "#dbdbdb",
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});
