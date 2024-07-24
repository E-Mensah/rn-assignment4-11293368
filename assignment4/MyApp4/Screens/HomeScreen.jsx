import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import HomePart1 from '../Components/HomePart1';
import FeaturedJobs from '../Components/FeaturedJobs';
import PopularJobs from '../Components/PopularJobs';
import PJcard from '../Components/PJcard';

const HomeScreen = () => {
  return (
    <ScrollView style={{
      width: 393, 
      backgroundColor: '#fafafd',
      padding: 20,
    }}>
        <StatusBar backgroundColor="#fafafd" 
        barStyle="light-content"   
        translucent={false} />  
        <HomePart1 />
        <FeaturedJobs />
        <PopularJobs />
        <PJcard />
    </ScrollView>
  )
}

export default HomeScreen
