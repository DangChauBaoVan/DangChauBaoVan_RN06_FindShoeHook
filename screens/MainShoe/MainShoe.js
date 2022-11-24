import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import AppBar from '../appBar/AppBar'
import Search from '../search/Search'
import ListShoe from '../listShoe/ListShoe'

export default function MainShoe() {
    const [shoeList, setShoeList] = useState();
    const [searchValue,setSearchValue] = useState("");
    const getProduct = async (keyword="") => {
        try {
            const response = await fetch(`http://svcy3.myclass.vn/api/Product?keyword=${keyword}`);
            const json = await response.json();
            setShoeList(json.content);
        } catch (error) {
            console.error(error);
        }
    }
    const searchShoe = (text) => {
        
        setSearchValue(text)
    }
    const callBackSearch = useCallback((text)=>searchShoe(text),[])
    useEffect(() => {
        getProduct(searchValue);
    }, [searchValue]);
    
    return (
        <View style={{ backgroundColor: '#EBEAEF', flex: 1 }}>
            <AppBar />
            <Search searchShoe={callBackSearch}/>
            <ListShoe shoeList={shoeList}/>
        </View>
    )
}