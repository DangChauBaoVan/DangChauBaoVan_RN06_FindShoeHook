import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

function Search(props) {
    console.log("This is Search Component")
   
    return (
        <View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Find Your</Text>
                <Text style={styles.text}>Dream Shoes</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",  paddingLeft: 10,paddingRight: 10, marginBottom: 10, marginTop: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center", flex: 2, marginRight: 10 }}>
                    <View style={styles.searchIcon}>
                        <Image source={require("../../assets/img/search.png")} style={styles.icon} />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder='Search Shoes...'  onChangeText={(text)=>{props.searchShoe(text)}}/>
                    </View>

                </View>
                <View >
                    <TouchableOpacity style={styles.iconBg}>
                        <Image source={require("../../assets/img/setting.png")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:"700",
        color:"#000"
    },
    icon: {
        width: 24,
        height: 24
    },
    iconBg: {
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    searchIcon: {
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        backgroundColor: "#fff",
        flex: 1,
        height: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    }
})

export default  memo(Search)