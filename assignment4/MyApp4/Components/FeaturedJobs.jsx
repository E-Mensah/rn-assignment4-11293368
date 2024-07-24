import React from 'react'
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'

const FeaturedJobs = () => {
  return (
    <View style={{marginBottom: 38}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15,}}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Featured Jobs</Text>
            <Text style={{color: 'grey', fontSize: 15, fontWeight: '400'}}>See all</Text>
        </View>

        <ScrollView horizontal={true} style={{flexDirection: 'row',}}>
            
           <View>
           <ImageBackground source={require('../assets/Images/Mask Group.png')} style={{resizeMode: 'Contain', width: 280, height: 200, backgroundColor: '#6495ED', borderRadius: 20, padding: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 20}}>
                <View style={{flexDirection: 'row', width: '100%', gap: 20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'white', borderRadius: 10}}>
                        <Image source={require('../assets/Images/facebook.png')}/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Software Engineer</Text>
                        <Text style={{color: 'white', fontSize: 13}}>Facebook</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: 'white', fontSize: 16}}>$180,000</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Accra,Ghana</Text>
                </View>
            </ImageBackground>
           </View>
 
           <View>
           <ImageBackground source={require('../assets/Images/Mask Group.png')} style={{resizeMode: 'Contain', width: 280, height: 200, backgroundColor: '#002D72', borderRadius: 20, padding: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 20}}>
                <View style={{flexDirection: 'row', width: '100%', gap: 20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'white', borderRadius: 10}}>
                        <Image source={require('../assets/Images/google.png')}/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Software Engineer</Text>
                        <Text style={{color: 'white', fontSize: 13}}>Google</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: 'white', fontSize: 16}}>$160,000</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Accra,Ghana</Text>
                </View>
            </ImageBackground>
           </View>

           <View>
           <ImageBackground source={require('../assets/Images/Mask Group.png')} style={{resizeMode: 'Contain', width: 280, height: 200, backgroundColor: 'lightblue', borderRadius: 20, padding: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 20}}>
                <View style={{flexDirection: 'row', width: '100%', gap: 20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'white', borderRadius: 10}}>
                        <Image source={require('../assets/Images/burger-king-4 1.png')} style={{width: 25, height: 25}}/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Software Engineer</Text>
                        <Text style={{color: 'white', fontSize: 13}}>Facebook</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: 'white', fontSize: 16}}>$180,000</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Accra,Ghana</Text>
                </View>
            </ImageBackground>
           </View>

           <View>
           <ImageBackground source={require('../assets/Images/Mask Group.png')} style={{resizeMode: 'Contain', width: 280, height: 200, backgroundColor: 'red', borderRadius: 20, padding: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 20}}>
                <View style={{flexDirection: 'row', width: '100%', gap: 20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'white', borderRadius: 10}}>
                        <Image source={require('../assets/Images/image 8.png')} style={{width: 25, height: 25}}/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Software Engineer</Text>
                        <Text style={{color: 'white', fontSize: 13}}>Beats</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: 'white', fontSize: 16}}>$180,000</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Accra,Ghana</Text>
                </View>
            </ImageBackground>
           </View>

           <View>
           <ImageBackground source={require('../assets/Images/Mask Group.png')} style={{resizeMode: 'Contain', width: 280, height: 200, backgroundColor: 'grey', borderRadius: 20, padding: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 20}}>
                <View style={{flexDirection: 'row', width: '100%', gap: 20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'white', borderRadius: 10}}>
                        <Image source={require('../assets/Images/apple.png')} style={{width: 20, height: 20}}/>
                    </View>
                    <View>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Software Engineer</Text>
                        <Text style={{color: 'white', fontSize: 13}}>Apple</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: 'white', fontSize: 16}}>$180,000</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Accra,Ghana</Text>
                </View>
            </ImageBackground>
           </View>

        </ScrollView>
    </View>
  )
}

export default FeaturedJobs
