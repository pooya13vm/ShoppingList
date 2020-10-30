import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { styles } from './styles';

export default function ShoppingListItem({item,deleteItem,checkHandler}) {
    return (
        <View style={[styles.ListItemContainer,{ height:54}]}>
          <TouchableOpacity 
          style={[styles.deletePart,{paddingVertical:15}]} 
          onPress={() => deleteItem(item.key)}>
          <AntDesign name="delete" size={24} color="black" /> 
          
          </TouchableOpacity>

          <View style={styles.shoppingItem}>
            <LinearGradient colors={['rgba(25,80,200,0.8)','transparent']}
               style={{position: 'absolute',left: 0,right: 0,top:0,bottom:0,height: 40,}}/>
            <Text style={[styles.infoItemName,{ fontFamily:"OswaldM",}
            , item.checked ? {color:"dimgrey",textDecorationLine:"line-through"}:{}]}>{item.name}</Text> 
          </View>

          <TouchableOpacity 
          style={[styles.goToFolderPart,{paddingVertical:15,paddingHorizontal:25}]} 
          onPress={() => checkHandler(item.key)}>
          {(!item.checked) ? (<Fontisto name="shopping-basket-add" size={24} color="navy" />) :
           (<AntDesign name="checkcircleo" size={24} color="lawngreen" />)}
            
          </TouchableOpacity>
            
        </View>
    )
}

