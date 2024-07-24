import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Home', { name, email });

  };

  return (
    <View style={{marginBottom: 60}}>
      <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20}}>
        <TextInput style={{ paddingLeft: 15, borderColor: 'lightgrey', borderWidth: 1, borderStyle: 'solid', width: 351, borderRadius: 7, paddingBottom: 8, paddingTop: 8, }} placeholder='Name' value={name}
          onChangeText={(text) => setName(text)} />
        <TextInput style={{ paddingLeft: 15, borderColor: 'lightgrey', borderWidth: 1, borderStyle: 'solid', width: 351, borderRadius: 7, paddingBottom: 8, paddingTop: 8, }} placeholder='Email' value={email}
          onChangeText={(text) => setEmail(text)} />

        <TouchableOpacity 
        onPress={handleLoginPress}
        style={{backgroundColor: '#356899', width: 351, paddingBottom: 18, paddingTop: 18, borderRadius: 7, marginTop: 22}}>
            <Text style={{color: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 15}}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Form
