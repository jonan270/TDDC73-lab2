import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardBg from './assets/images/card_bg.jpeg'
import chipImg from './assets/images/chip.png'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={cardBg}
        style={styles.cardImageBg}
      >
        <View style={styles.cardView}>
          <Image source={chipImg} style={{width: 101*0.65, height: 82*0.65}}/>
          <Text style={styles.cardText}>Test</Text>
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
    padding: 25,
  }
});
