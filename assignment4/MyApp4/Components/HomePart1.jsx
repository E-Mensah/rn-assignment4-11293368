import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const HomePart1 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { name, email } = route.params;

  return (
    <View style={{marginBottom: 48}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50}}>
            <View>
                <Text style={{fontSize: 30, fontWeight: '700'}}>{name}</Text>
                <Text style={{fontSize: 22, fontWeight: '400', color: 'grey'}}>{email}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{position: 'relative'}}>
                <Image source={require('../assets/Images/Profile.png')} style={{width: 65, height: 65, objectFit: 'contain'}} />
                <View style={{position: 'absolute',}}>
                    <View style={{position: 'relative', top: 11, right: -50,width: 10, height: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{position: 'absolute'}} source={require('../assets/Images/EllipseW.png')}/>
                        <Image style={{position: 'absolute'}}  source={require('../assets/Images/EllipseO.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
            <View style={{backgroundColor: '#f5f5f5', height: 50,  width: 285, flexDirection: 'row', alignItems: 'center', gap: 8, paddingLeft: 10, borderRadius: 10}}>
                <View style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}><Image source={require('../assets/Images/search.1 1.png')}/></View>
                <Text style={{color: 'grey', fontSize: 17}}>Search a job or position</Text>
            </View>

            <View style={{height: 50, justifyContent: 'center', alignItems: 'center', width: 50, backgroundColor: '#f5f5f5', borderRadius: 12}}>
                <Image source={require('../assets/Images/filter.5.png')}/>
            </View>
        </View>
    </View>
  )
}

export default HomePart1
