import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, ImageBackground,FlatList,TextInput,Keyboard} from 'react-native'
import { Button } from 'react-native-elements';
import ShoppingListItem from '../components/shoppingListItem';
import ShoppingScreenHeader from './../components/ShoppingScreenHeader';
import { styles } from './../components/styles';

const ShoppingList = ({navigation,route}) => {
    const {item} = route.params
    const [state2, setState2] = useState(item.itemHolder)
    const[holder , setHolder] = useState("")

    const addItem = () => {
        setState2(pre =>[
            
            {
              name: holder,
              key: Math.floor(Math.random() * 1000).toString(),
              checked:false,
            } , 
            ...pre
        ])
        setHolder("")
        Keyboard.dismiss()
      }

      const backTo = () => {
        item.itemHolder = state2
        navigation.navigate("MainScreen" , {item: item})
      }

      const deleteAll = () => {
        let empty = []
        setState2(empty)
      }
      const deleteItem = key => setState2(prev => prev.filter((p)=> p.key != key))

      const checkHandler = (key) => {
        let stateDob = [...state2]
        const index = stateDob.findIndex(x => x.key == key)
        const item = stateDob.filter(x => x.key == key)
        item[0].checked = !item[0].checked
        stateDob[stateDob.length] = item[0]
        stateDob.splice(index,1)
        setState2(stateDob)
      }

    return (
     <View style={styles.shoppingListContainer}>
      <ImageBackground source={require("../assets/2.webp")} style={styles.backgroundImg}/>

       <ShoppingScreenHeader item={item}
        backTo={backTo} 
        deleteAll={deleteAll}
        state={state2.length}/>

       <View style={styles.list}>
         <FlatList
          data={state2}
          renderItem={({ item }) => (
            <ShoppingListItem 
              item = {item}
              deleteItem={deleteItem}
              checkHandler={checkHandler}
            />
            )}
        />
       </View>

       <View style={styles.addItemContainer}>
          <TextInput 
                placeholder="add an item"
                style={styles.input}
                onChangeText={setHolder}
                value={holder}
            />
          <Button title="Add" 
          onPress={addItem}
          buttonStyle = {styles.addButton}
          titleStyle={styles.addButtonText}
          type="outline"
          />
       </View>


     </View>
    )
}

export default ShoppingList

// const styless = StyleSheet.create({
   
  
        
//     })
