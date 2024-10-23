import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {
  const handlePress= ()=>console.log("text clicked")
  return (
    <SafeAreaView style={styles.container}>
      <Text >
      You need to enable JavaScript to run this app. 
    </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems:"center"
    
  },
});
