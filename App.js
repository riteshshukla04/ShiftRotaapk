import * as React from 'react';
import { View, Text,ScrollView,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './src/Screens/HomeNavigator';


function App() {
  return (

      
        <HomeNavigator></HomeNavigator>
   
      
     
  
  
  );
}

export default App;