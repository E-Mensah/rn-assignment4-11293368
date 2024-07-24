import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'

const PJcard = () => {
    
    const popularJobs = [
        { id: '1', icon: require('../assets/Images/image 8.png'), job: 'Jr Executive', title: 'Burger King', amount: '$96,000/y', city: 'Los Angels, US' },
        { id: '2', icon: require('../assets/Images/burger-king-4 1.png'), job: 'Product Manager', title: 'Beats', amount: '$84,000/y', city: 'Florida, US' },   
        { id: '3', icon: require('../assets/Images/Vector.png'), job: 'Product Manager', title: 'Facebook', amount: '$86,000/y', city: 'Florida, US' },
        { id: '4', icon: require('../assets/Images/apple.png'), job: 'Product Manager', title: 'Apple', amount: '$86,000/y', city: 'Florida, US' },
        { id: '5', icon: require('../assets/Images/burger-king-4 1.png'), job: 'Jr Executive', title: 'Burger King', amount: '$96,000/y', city: 'Los Angels, US' },
        { id: '6', icon: require('../assets/Images/image 8.png'), job: 'Product Manager', title: 'Beats', amount: '$84,000/y', city: 'Florida, US' },   
        { id: '7', icon: require('../assets/Images/apple.png'), job: 'Product Manager', title: 'Facebook', amount: '$86,000/y', city: 'Florida, US' },
        { id: '8', icon: require('../assets/Images/Vector.png'), job: 'Product Manager', title: 'Apple', amount: '$86,000/y', city: 'Florida, US' },
        
    ];

  return (
    <View style={{marginBottom: 30}} > 
    
    {popularJobs.map((item) => (
        <View key={item.id} style={{flexDirection: 'row', width: 360, height: 60, backgroundColor: 'white', gap: 18, justifyContent: 'space-evenly', marginBottom: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={item.icon} />
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '600', textAlign: 'left'}}>{item.job}</Text>
                <Text style={{color: 'grey', fontSize: 13, textAlign: 'left'}}>{item.title}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: '600', textAlign: 'right'}}>{item.amount}</Text>
                <Text style={{color: 'grey', fontSize: 13, textAlign: 'right'}}>{item.city}</Text>
            </View>
        </View>     
    ))}

    </View>
  )
}

export default PJcard
