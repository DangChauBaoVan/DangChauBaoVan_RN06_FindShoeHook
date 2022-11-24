import { View, Text, Image, Dimensions, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ListShoe(props) {
  const { shoeList } = props;

  const SCREEN_WIDTH = Dimensions.get('window').width


  const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 18) / 2,
      height: Number(Math.random() * 20 + 18) * 10,
      backgroundColor: 'white',
      margin: 4,
      borderRadius: 18,
      position: 'relative',
    };
  };

  const renderChildren = ({ item }) => {
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <TouchableOpacity style={styles.iconContainer}>
          <View>
            <Image style={styles.icon} source={require("../../assets/img/love.png")} />
          </View>
        </TouchableOpacity>
        <View style={styles.shoeImageContainer}>
          <Image
            style={styles.shoeImg}
            source={{
              uri: item.image,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.shoeText}>
          <Text style={styles.shoeName}>{item.name}</Text>
          <Text style={styles.shoePrice}>$ {item.price}</Text>
        </View>
      </View>

    );
  };


  return (
    <SafeAreaView style={styles.container}>
      
        <FlatList
          data={shoeList}
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={renderChildren}
          numColumns={2}
        />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEAEF',
  },
  mainWrapperView: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  iconContainer: {

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 15,
    left: 15,
  },
  icon: {
    width: 32,
    height: 32,
    zIndex: 5
  },
  contentContainer: {
    paddingHorizontal: 0,
    alignSelf: 'stretch',

  },
  shoeImg: {
    width: "100%",
    height: "100%",
  },
  shoeImageContainer: {
    flex: 2,
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  shoeText: {
    flex: 1,
    marginLeft: 8,
    marginTop: 10,
    zIndex: 1
  },
  shoeName: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10
  },
  shoePrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
});