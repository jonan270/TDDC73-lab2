import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import cardBg from './assets/images/card_bg.jpeg'
import chipImg from './assets/images/chip.png'

import mastercardImg from './assets/images/mastercard.png'
import visaImg from './assets/images/visa.png'

export default function App() {
  const topImgScaleFactor = 0.65;

  const topImgW = 100 * topImgScaleFactor;
  const topImgH = 80 * topImgScaleFactor;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={cardBg}
        style={styles.cardImageBg}
      >
        <View style={styles.cardView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={chipImg} style={{width: topImgW, height: topImgH}}/>
            <Image source={visaImg} style={{alignSelf: 'flex-end', width: topImgW, height: topImgH, resizeMode: 'contain'}}/>
          </View>
          <Text style={styles.cardText}>6011 2312 5709 4238</Text>
          <View style={styles.bottomRowView}>
            <Text style={styles.cardText}>Jonathan Andersson</Text>
            <Text style={styles.cardText}>11/22</Text>
          </View>
        </View>
      </ImageBackground>
      <Text>Open up App.js to start on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: Colors.white,
    fontFamily: 'monospace',
    fontSize: 20,
  },
  cardImageBg: {
    width: 405,
    height: 261,
    borderRadius: 15,
    overflow: "hidden",
  },
  cardView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 25,
  },
  bottomRowView: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
});
