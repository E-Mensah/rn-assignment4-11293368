import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import IntroTxt from '../Components/IntroTxt'
import Form from '../Components/Form'
import LastSec from '../Components/LastSec'

const LoginScreen = () => {
  return (
    <View style={{width: 393, 
      backgroundColor: '#fafafd',
      alignItems: 'center',
      justifyContent: 'center',
      height: 870,
      }}>

      <StatusBar backgroundColor="#fafafd" 
        barStyle="light-content"   
        translucent={false} />  
      <IntroTxt />
      <Form />
      <LastSec />
    </View>
  )
}

export default LoginScreen
