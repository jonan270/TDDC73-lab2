import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

import Card from './assets/components/Card.js'


export default function App() {

  // States must be used to hold date information
  // individually, aswell as a state for updating
  // information displayed on the card.
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("0000");
  const [expire, setExpire] = useState("00/00");

  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardHolder, setCardHolder] = useState("FIRSTNAME SURNAME");
  const [cvv, setCvv] = useState("000");

  const [cardNumberFocused, setCardNumberFocused] = useState(false);
  const [cardHolderFocused, setCardHolderFocused] = useState(false);
  const [expireFocused, setExpireFocused] = useState(false);
  const [cvvFocused, setCvvFocused] = useState(false);

  // Updates date string state
  function updateDate(newMonth, newYear) {

    setMonth(newMonth);
    setYear(newYear);

    // Remove first 2 digits of year
    setExpire(newMonth + "/" + newYear.slice(2, 4));
  }

  // Logic taken from:
  // https://stackoverflow.com/questions/40237150/react-native-how-to-format-payment-in-mm-yy-and-spaced-16-digit-card-number-in
  function updateCardNumber(number) {
    setCardNumber(number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim());
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>Card Number</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={input => updateCardNumber(input)}
            value={cardNumber}
            onFocus={() => setCardNumberFocused(true)}
            onBlur={() => setCardNumberFocused(false)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>Card Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={input => setCardHolder(input)}
            onFocus={() => setCardHolderFocused(true)}
            onBlur={() => setCardHolderFocused(false)}
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
              // Grab the selected value for month and reuse old year variable
              onSelect ={(index, value) => updateDate(String(value), year)}
              onDropdownWillShow={() => setExpireFocused(true)}
              onDropdownWillHide={() => setExpireFocused(false)}
            />
            <ModalDropdown style={[styles.input, {width: '30%'}]}
              options={['2022', '2023', '2024', '2025',
                        '2026', '2027', '2028', '2029',
                        '2030', '2031', '2032', '2023',]}
              // Grab the selected value for year and reuse old month variable
              onSelect ={(index, value) => updateDate(month, String(value))}
              onDropdownWillShow={() => setExpireFocused(true)}
              onDropdownWillHide={() => setExpireFocused(false)}
            />
            { /* Text input for CVV */}
            <TextInput
              style={[styles.input, {width: '30%'}]}
              onChangeText={input => setCvv(input)}
              keyboardType={'numeric'}
              onFocus={() => setCvvFocused(true)}
              onBlur={() => setCvvFocused(false)}
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
        showBackside = {cvvFocused}
        cardNumberFocused = {cardNumberFocused}
        cardHolderFocused = {cardHolderFocused}
        expireFocused = {expireFocused}
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
