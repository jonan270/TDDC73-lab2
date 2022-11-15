import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardBg from './assets/images/card_bg.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={cardBg}
        style={styles.cardBgContainer}
      >
        <Text style={styles.cardText}>Test</Text>
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
  cardBgContainer: {
    width: 270,
    height: 174,
    borderRadius: 15,
    overflow: "hidden",
  }
});
