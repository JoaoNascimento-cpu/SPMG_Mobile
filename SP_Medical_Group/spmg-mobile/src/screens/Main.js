import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import Consulta from './Consulta';

const BottomTab = createBottomTabNavigator();

export default class Main extends Component{
    render(){
        return(
            <>
                <View style={styles.header}>
                    <View style={styles.header_content}>
                        
                        <TouchableOpacity onPress={this.logout}>
                            <FontAwesome5 name="sign-out-alt" size={24} color='#FFF'  />
                        </TouchableOpacity>
                        {
                            
                            // (userAuthenticated.role === '3' && (
                            //     <>
                            //         <Text style={styles.header_title}>{userAuthenticated.nomePaciente}</Text>
                            //         <FontAwesome5 style={styles.header_img} name='user-plus' size={24} color='#3E4954' />
                            //     </>
                            // ))
                        }
                    </View>
                </View>
                <bottomTab.Navigator
                    shifting
                    activeColor="#FFF"
                    inactiveColor="#878787"
                    barStyle={{ backgroundColor: "#364958", height: 55 }}
                    showIcon={true}
                >
                    
                    <bottomTab.Screen
                        name="Consulta"
                        component={Consulta}
                        options={{
                        tabBarLabel: "Consulta",
                        tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="notes-medical" size={24} color={color} />
                        ),
                    }}
                    />                   
                </bottomTab.Navigator>
            </>
        )
    }
}