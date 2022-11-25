import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import cardBg from '../images/card_bg.jpeg'
import backsideBg from '../images/backside_bg.jpeg'
import chipImg from '../images/chip.png'

import mastercardImg from '../images/mastercard.png'
import visaImg from '../images/visa.png'
import amexImg from '../images/amex.png'
import discoverImg from '../images/discover.png'
import troyImg from '../images/troy.png'

const imgScaleFactor = 0.45;
const topImgW = 100 * imgScaleFactor;
const topImgH = 80 * imgScaleFactor;

const transparentColor = 'hsla(360, 100%, 100%, 0.0)'
const markerColor = 'hsla(360, 100%, 100%, 1.0)'

export default function Card(props) {
  
  // State for handling variable images
  const [brandImg, setBrandImg] = useState(visaImg);

  // State for hash masking card number
  const [maskedNumber, setMaskedNumber] = useState("#### #### #### ####")

  function setCardType () {
    let number = props.cardNumber;

    let re = new RegExp("^4");
    if (number.match(re) != null) {
      setBrandImg(visaImg);
      return;
    }

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) {
      setBrandImg(amexImg);
      return;
    }

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) {
      setBrandImg(mastercardImg);
      return;
    }

    re = new RegExp("^6011");
    if (number.match(re) != null) {
      setBrandImg(discoverImg);
      return;
    }
    
    re = new RegExp('^9792')
    if (number.match(re) != null) {
      setBrandImg(troyImg);
      return;
    }

    setBrandImg(visaImg); // default type
  }

  // When cardNumber is changed:
  // · Update image used.
  // · Generate masked cardNumber
  useEffect(() => {
    setCardType();

    let cardNum = props.cardNumber;
    let fullyMasked = "#### #### #### ####";
    let maskedRes = "";

    for (var i = 0; i < fullyMasked.length; i++) {
      if(cardNum[i])
        maskedRes += cardNum[i];
      else
        maskedRes += fullyMasked[i];
    }

    setMaskedNumber(maskedRes);

  },[props.cardNumber])

  if(props.showBackside) {
    return(
      <View>
        <ImageBackground
          source={backsideBg}
          style={styles.cardImageBg}
        >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
              <View style={styles.magnetStripView}></View>
              <Text style={{color: Colors.white, alignSelf: 'flex-end', marginRight: '10%', marginTop: '3%'}}>CVV</Text>
              <View style={styles.cvvView}><Text style={styles.cvvText}>{props.cvv}</Text></View>
              <View style={{margin: 32 * imgScaleFactor}}>
                <Image source={brandImg} style={styles.brandImage}/>
              </View>
            </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <View>
        <ImageBackground
            source={cardBg}
            style={styles.cardImageBg}
        >
          <View style={styles.cardView}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={chipImg} style={{width: topImgW, height: topImgH}}/>
              <Image source={brandImg} style={styles.brandImage}/>
              </View>
              {/* Mark border if cardNumber input is selected */}
              <View style={[
                styles.markerView,
                props.cardNumberFocused ?
                {borderColor: markerColor} : {borderColor: transparentColor}
              ]}>
                <Text style={styles.cardText}>{maskedNumber}</Text>
              </View>
              <View style={styles.bottomRowView}>
              <View>
                  <Text style={styles.cardTitleText}>Card holder</Text>
                  {/* Mark border if cardNumber input is selected */}
                  <View style={[
                    styles.markerView,
                    props.cardHolderFocused ?
                    {borderColor: markerColor} : {borderColor: transparentColor}
                  ]}>
                    <Text style={styles.cardText}>
                      {/* If no card holder is provided, print "FIRSTNAME SURNAME" */}
                      {props.cardHolder != "" ? props.cardHolder : "FIRSTNAME SURNAME"}
                    </Text>
                  </View>
              </View>
              <View>
                  <Text style={styles.cardTitleText}>Expires</Text>
                  {/* Mark border if cardNumber input is selected */}
                  <View style={[
                    styles.markerView,
                    props.expireFocused ?
                    {borderColor: markerColor} : {borderColor: transparentColor}
                  ]}>
                    <Text style={styles.cardText}>{props.expires}</Text>
                  </View>
              </View>
              </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    cardText: {
      color: Colors.white,
      fontFamily: 'monospace',
      fontSize: 36 * imgScaleFactor,
    },
    cardTitleText: {
      color: 'yellow',
      fontFamily: 'monospace',
      fontSize: 26 * imgScaleFactor,
    },
    cardImageBg: {
      width: 405 * imgScaleFactor * 1.5,
      height: 261 * imgScaleFactor * 1.5,
      borderRadius: 20 * imgScaleFactor,
      overflow: "hidden",
    },
    brandImage: {
        alignSelf: 'flex-end',
        width: topImgW,
        height: topImgH,
        resizeMode: 'contain',
    },
    cardView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 32 * imgScaleFactor,
    },
    bottomRowView: {
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    markerView: {
      borderWidth: 4 * imgScaleFactor,
      padding: 4 * imgScaleFactor,
      borderRadius: 9 * imgScaleFactor,
    },
    magnetStripView: {
      width: '100%',
      height: '20%',
      backgroundColor: Colors.black,
      alignSelf: 'center',
      marginTop: '7.5%',
    },
    cvvView: {
      width: '80%',
      height: '20%',
      justifyContent: 'center',
      backgroundColor: Colors.white,
      alignSelf: 'center',
      borderRadius: 9 * imgScaleFactor,
    },
    cvvText: {
      alignSelf: 'flex-end',
      margin: 9 * imgScaleFactor,
    }
  });