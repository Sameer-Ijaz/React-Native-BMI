import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { StyleSheet, Text, View,Image } from 'react-native';
import Calculator from './components/calculator';
import Input from './components/Input';
import Result from './components/Result';

export default function App() {
  const [BMI, setBMI] = React.useState();
  const [show, setshow] = React.useState(false);

  function calculateBMI(height, mass) {
    setBMI(mass / (height * height));
    setshow(true)
  
    };

  return (
    <View style={styles.container}>
      {/* <Image
        style={{height:200,width:200,marginBottom:30}}
        source={require("./assets/pngegg.png")} />
      <Input calculateBMI={calculateBMI} />
      {show==true &&
        <Result BMI={BMI} />
      } */}

      <Calculator/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e6df',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
