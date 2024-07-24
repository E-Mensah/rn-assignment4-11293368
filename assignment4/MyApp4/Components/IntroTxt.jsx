import React from 'react'
import { Text, View } from 'react-native'

const IntroTxt = () => {
  return (
    <View style={{alignSelf: 'flex-start', paddingLeft: 25}}>
        <View style={{marginBottom: 50,}}>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#356899', marginBottom: 9}}>
                Jobizz
            </Text>
            <Text style={{fontSize: 23, fontWeight: '700', marginBottom: 7}}>
                Welcome back 👋
            </Text>
            <Text style={{fontSize: 14, color: '#BDBEC2'}}>
                Let's log in. Apply to jobs!
            </Text>
        </View>
    </View>
  )
}

export default IntroTxt
