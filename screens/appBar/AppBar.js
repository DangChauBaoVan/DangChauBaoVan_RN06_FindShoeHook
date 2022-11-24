import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

function AppBar() {
    console.log("This is AppBar COMponent")
    return (
        <View>
            <View style={{flexDirection:"row", alignItems: "center",justifyContent:"space-between", padding:10, marginBottom:10,marginTop:25}}>
                <TouchableOpacity style={styles.iconBg}>
                    <Image style={styles.icon} source={require("../../assets/img/left-arrow.png")} />
                </TouchableOpacity>
                <View style={styles.iconBg}>
                    <Image style={styles.icon} source={require("../../assets/img/avatar.png")}/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    iconBg: {
        backgroundColor: "#fff",
        width:50,
        height:50,
        borderRadius:10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default memo(AppBar)