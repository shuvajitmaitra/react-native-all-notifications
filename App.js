import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={{width: 200, height: 50, backgroundColor: "#27ac1f", borderRadius: 10, textAlign: "center", alignItems: 'center', justifyContent: "center"}}>
              <Text style={{textAlign: "center"}} onPress={() =>
        navigation.navigate('AllNotification')
      } >Go to All notifications</Text>
      </TouchableOpacity>
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
});
