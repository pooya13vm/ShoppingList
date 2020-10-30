import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";

const ListItem = ({item , itemDeleter , handelPage}) => {
    const itemArray = item.itemHolder;
    const filtered = itemArray.filter(val => val.checked == true)
    let x = filtered.length
    let y = item.itemHolder.length

    return (
        <View style={styles.ListItemContainer}>
          <TouchableOpacity style={styles.deletePart} onPress={() => itemDeleter(item.key)}>
           <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.infoPart}>
            <LinearGradient colors={['rgba(25,80,200,0.8)','transparent']}
               style={{position: 'absolute',left: 0,right: 0,top:0,bottom:0,height: 40,}}/>

            <View style={styles.infoLineView}>
            <Text style={styles.infoItemName}>{item.name}</Text> 
            {(x==y && y != 0) ? (<AntDesign name="checksquareo" size={24} color="limegreen" />) : (null)}
            </View>
            {(item.itemHolder == "") ? (<Text style={styles.infoDetail}>The List Is Empty</Text>) : 
            <Text style={styles.infoDetail}>
            You Bought :  {x}   of   {y}</Text>}
          </View>

          <TouchableOpacity style={styles.goToFolderPart} onPress={() => handelPage(item.key)}>
           <Ionicons name="md-open" size={26} color="black" />
          </TouchableOpacity>
            
        </View>
    )
}

export default ListItem

