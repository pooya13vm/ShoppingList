import React,{useState} from 'react'
import { View ,TextInput,FlatList,ImageBackground , Keyboard} from 'react-native'
import { Button , Input} from 'react-native-elements';
import { styles } from './../components/styles';
import MainScreenHeader from '../components/MainScreenHeader';
import ListItem from './../components/ListItem';

const MainScreen = ({navigation}) => {
    const [state,setState] = useState([])
    const[holder , setHolder] = useState("")  

    const itemDeleter = (key) => {
        setState(prev => prev.filter((p)=> p.key != key))
      }

    const handelPage =  (key) => {
        const item = state.filter(x => x.key == key)
        navigation.navigate("ShoppingList",{
          
        //   setArray: setArray,
          item: item[0]
        })
        
      }

    const addNewItem = () => {
        setState(pre =>[
            {
              name: holder,
              key: Math.floor(Math.random() * 1000).toString(),
            //   array: array,
              itemHolder:[],
              check:false,
            } , 
            ...pre
        ])
        setHolder("")
        Keyboard.dismiss()
    }
  
    return (
     <View style={styles.mainScreenContainer}>
      <ImageBackground source={require("../assets/1.jpg")} style={styles.backgroundImg}/>
      <MainScreenHeader/>
      <View style={styles.list}>
        <FlatList
            data = {state}
            renderItem = {({item}) => (
                <ListItem 
                  item = {item}
                  itemDeleter = {itemDeleter}
                  handelPage = {handelPage}
                />
            )}
        />
       </View>


        <View style={styles.addItemContainer}>
          <TextInput
            style = {styles.input}
               placeholder="Create a Shopping List"
               placeholderTextColor="#a16241"
               onChangeText ={setHolder}
               value = {holder}
           />
         
           <Button 
               buttonStyle = {styles.addButton}
               titleStyle={styles.addButtonText}
               title="Add"
               type="outline"
               onPress={addNewItem}
           />
        </View>
     
     </View>
          
      
    )
}

export default MainScreen
