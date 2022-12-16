import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/screen/Index';
import Welcome from './src/screen/welcome';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Index /> */}
      <Welcome/>
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
});
