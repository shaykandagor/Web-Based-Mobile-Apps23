import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, SafeAreaView } from "react-native";
import List from './components/List'

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
   );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 0,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
