import { StyleSheet } from 'react-native';
import Card from './assets/components/Card.js'


export default function App() {
  return (
    <Card/>
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
