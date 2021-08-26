import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import TeacherList from "../pages/Teacherlist";
import Favorites from "../pages/Favorites";

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs (){
    return  (
        <Navigator 
        screenOptions={{
            headerShown: false,
                        
            tabBarStyle:{
                elevation: 0,
                shadowOpacity: 0,
                height: 84,
            },
            tabBarItemStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            tabBarIconStyle: {
                flex: 0,
                width: 40,
                height:40,
            },
            tabBarLabelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,

            },
            tabBarInactiveBackgroundColor: '#fafafc',
            tabBarActiveBackgroundColor: '#ebebf5',
            tabBarInactiveTintColor: '#c1bccc',
            tabBarActiveTintColor: '#32264d',
        }}

            >
            <Screen
             name="TeacherList"
             component={TeacherList}
             options={{
                 tabBarLabel: 'Proffys',
                 tabBarIcon: ({color, size}) => {
                     return (
                         <Ionicons name="ios-easel"  size={size} color={color}/>
                     )
                 }
             }}
             />
            <Screen
             name="Favorites"
              component={Favorites}
              options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name="ios-heart"  size={size} color={color}/>
                    )
                }
            }}
              />
        </Navigator>
    )
}

export default StudyTabs;