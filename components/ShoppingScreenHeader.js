import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import { styles } from './styles';

const ShoppingScreenHeader = ({item , backTo , deleteAll , state}) => {
    return (
       <View>
        <View style={styles.shoppingListTopHeader}>
          <Text style={styles.shoppingHeaderText}>{item.name}</Text>
        </View>
        <View style={styles.shoppingListDownHeader}>
           <TouchableOpacity style={styles.shoppingHeaderBack} onPress={backTo}>
             <Text style={styles.shoppingHeaderInfoText}>save & back</Text>
           </TouchableOpacity>
           <View style={styles.shoppingHeaderInfo}>
              <Text style={styles.shoppingHeaderInfoText}>{state}</Text>
           </View>
           <TouchableOpacity style={styles.shoppingHeaderDelete} onPress={deleteAll}>
             <Text style={styles.shoppingHeaderInfoText}>clear list</Text>
           </TouchableOpacity>
        </View>
       </View>
    )
}

export default ShoppingScreenHeader

const styless = StyleSheet.create({

})
