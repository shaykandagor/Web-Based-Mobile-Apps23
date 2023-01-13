import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';

const App = () => {
  // console.log("App starting!")
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
