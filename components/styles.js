import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    mainScreenContainer: {
      flex: 1,
      justifyContent:"space-between",
      backgroundColor: "white",
      marginTop : Constants.statusBarHeight,
    },
    header: {
        margin:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"#05b8dc",
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderEndWidth:5,
        borderEndColor:"#f17d29",
        borderStartWidth:6,
        borderStartColor:"#a16241",
        borderTopWidth:1,
        borderTopColor:"#f17d29",
        borderBottomWidth:1,
        borderBottomColor:"#a16241",
        padding:10,
        zIndex:100
    },
    headerText: {
        fontFamily:"Great",
        fontSize:32,
        padding:10,
        color:"#252631"
    },
    headerIcon: {
        padding:8,
    },
    // backgroundImage: {
    //     marginTop:150,
    //     justifyContent: "center",
    //     alignSelf:"center",
    //     width:180,
    //     height:185,
    // },
    addItemContainer: {
        backgroundColor: "#05b8dc",
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        marginHorizontal:10,
        paddingBottom:5,
        borderColor:"#f17d29",
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingTop:10,
    },
    input: {
        height:35,
        width:250,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        fontFamily:"OswaldM",
        fontSize:18,
    },
    addButton: {
        padding:10,
        borderRadius:50,
        borderWidth:2,
    },
    addButtonText: {
        color:"#252631",
        fontFamily:"Lobster"
    },
    list: {
        marginTop:15,
        flex:1,
    },
    backgroundImg:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignSelf:"center",
    zIndex:0,
    position:"absolute",
    top:200,
    bottom:0,
    width:220,
    height:220,
    },
    ListItemContainer: {
        margin:15,
        height:80,
        flexDirection: "row",
        justifyContent:"space-between",
        borderRadius:10,
    },
    infoItemName: {
        color: "darkslategrey",
        fontSize:22,
        fontFamily:"OswaldB",
    },
    infoDetail:{
        color: "darkslategrey",
        fontSize:14, 
        fontFamily:"OswaldM",
        marginLeft:10
    },
    deletePart: {
        backgroundColor:"#f17d29",
        alignSelf:"center",
        paddingHorizontal:10,      
        paddingVertical:28,
        borderBottomLeftRadius:8,
        borderTopLeftRadius:8     
    },
    goToFolderPart: {
        alignSelf:"center",
        paddingHorizontal:13,      
        paddingVertical:27,
        backgroundColor:"#05b8dc",
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
    },
    infoPart: {
        flex:1,
        backgroundColor:"#05b8dc",
        justifyContent:"center",
        paddingHorizontal:10
    },
    infoLineView:{
        borderBottomWidth:1,
        borderBottomColor:"#a16241",
        justifyContent:"space-around",
        alignItems:"center",
        paddingBottom:10,
        flexDirection:"row"
    },
    shoppingListContainer: {
        flex: 1,
        backgroundColor: "white",
        marginTop : Constants.statusBarHeight,
        justifyContent:"space-between",
      },
    shoppingListTopHeader: {
        margin:1,
        height:60,
        alignItems:"center",
        backgroundColor:"#05b8dc",
        borderEndWidth:5,
        borderEndColor:"#f17d29",
        borderStartWidth:6,
        borderStartColor:"#a16241",
        borderTopWidth:1,
        borderTopColor:"#f17d29",
        borderBottomWidth:1,
        borderBottomColor:"#a16241",
        padding:5,
        zIndex:100,
        marginBottom:0,
        justifyContent:"center"
    },
    shoppingHeaderText: {
        color:"#252631",
        fontFamily:"Lobster",
        fontSize:20,
    },
    shoppingListDownHeader: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:1,
        alignItems:"center",
        backgroundColor:"#05b8dc",
        marginTop:0,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        borderEndWidth:5,
        borderEndColor:"#f17d29",
        borderStartWidth:6,
        borderStartColor:"#a16241",
        borderBottomWidth:1,
        borderBottomColor:"#f17d29"
    },
    shoppingHeaderBack:{
        flex:1, 
        backgroundColor:"limegreen",
        alignItems:"center",
        borderBottomLeftRadius:25,
        paddingVertical:8,
    },
    shoppingHeaderInfo: {
        flex:1,
        backgroundColor:"skyblue",
        alignItems:"center",
        paddingVertical:8,
        paddingHorizontal:15
    },
    shoppingHeaderDelete: {
        flex:1,
        backgroundColor:"tomato",
        alignItems:"center",
        paddingVertical:8,
        borderBottomRightRadius:25
    },
    shoppingHeaderInfoText:{
        color:"#252631",
        fontSize:15,
        fontFamily:"OswaldM",
    },
    shoppingItem: {
        flex:1,
        backgroundColor:"#05b8dc",
        justifyContent:"center",
        alignItems:"center",
        padding:1
    }


})
  
