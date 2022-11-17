import { StyleSheet } from 'react-native';
import Card from './assets/components/Card.js'


export default function App() {
  return (
    <Card
      cardHolder = "Jonathan Andersson"
      cardNumber = "6011 2312 5709 4238"
      expires = "11/22"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
