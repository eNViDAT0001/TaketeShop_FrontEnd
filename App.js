import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import { LogBox, StatusBar } from "react-native";
import Colors from './src/constants/Colors';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const rootReducer = combineReducers({

});

const store = createStore(rootReducer);


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};



function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }


  return ( 
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primaryColor}
        showHideTransition={'fade'}/>
      <AppNavigator></AppNavigator>
    </Provider>
   );
}

export default App;
