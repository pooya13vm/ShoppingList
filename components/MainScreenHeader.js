import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const MainScreenHeader = () => {
    return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Shopping List</Text>
        <FontAwesome name="shopping-basket" size={30} color="#f17d29" style={styles.headerIcon}/>
    </View>
    )
}

export default MainScreenHeader
