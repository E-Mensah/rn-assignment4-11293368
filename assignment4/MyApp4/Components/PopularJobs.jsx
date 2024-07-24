import React from 'react'
import { View,Text, } from 'react-native'

const PopularJobs = () => {
  return (
    <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15,}}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Popular Jobs</Text>
            <Text style={{color: 'grey', fontSize: 15, fontWeight: '400'}}>See all</Text>
        </View>
    </View>
  )
}

export default PopularJobs