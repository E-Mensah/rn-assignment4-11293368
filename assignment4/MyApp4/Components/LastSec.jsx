import React from 'react'
import { Text, View, Image } from 'react-native'

const LastSec = () => {
  return (
    <View style={{width: 351}}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
        <Image source={require('../assets/Images/line.png')} style={{width: 110, height: 1,}}/>
        <Text style={{fontSize: 14, color: '#BDBEC2'}}>Or continue with</Text>
        <Image source={require('../assets/Images/line.png')} style={{width: 110, height: 1,}}/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 35, marginBottom: 50, marginTop: 35}}>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 25}}>
                <Image source={require('../assets/Images/apple.png')} style={{width: 25, height: 25, objectFit: 'contain'}} />
            </View>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 25}}>
                <Image source={require('../assets/Images/google.png')} style={{width: 25, height: 25, objectFit: 'contain'}} />
            </View>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 25}}>
                <Image source={require('../assets/Images/facebook.png')} style={{width: 25, height: 25, objectFit: 'contain'}} />
            </View>
      </View>

      <Text style={{color: '#BDBEC2', textAlign: 'center', marginBottom: 170}}>Haven't an account? <Text style={{color: '#356899', fontWeight: '500'}}>Register</Text></Text>
    </View>
  )
}

export default LastSec
