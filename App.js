import React from 'react';
import { useState } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {AppLoading} from "expo"
import * as Font from "expo-font"
import MainScreen from "./screens/MainScreen"
import ShoppingList from './screens/ShoppingList'

const stack = createStackNavigator()

export default function App() {

  const[fontLoading,setFontLoading] = useState(false)

  const getFonts = () => {
    return Font.loadAsync({
      Great : require("./assets/fonts/Great.ttf"),
      Lobster : require("./assets/fonts/Lobster.ttf"),
      OswaldB : require("./assets/fonts/OswaldB.ttf"),
      OswaldM : require("./assets/fonts/OswaldM.ttf")
    })
  }
 
  if(fontLoading){
    return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
          name="MainScreen" 
          component={MainScreen}
          options={{headerShown:false}}  
          />
          <stack.Screen 
          name="ShoppingList" 
          component={ShoppingList}
          options={{headerShown:false}}  
          />
        </stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return(
      <AppLoading 
         startAsync={getFonts}
         onFinish={()=> setFontLoading(true)}
      />
    )
  }
}