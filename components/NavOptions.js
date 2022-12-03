import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-web';
import tw from "tailwind-react-native-classnames";
import { Icon } from '@rneui/themed';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image:"https://links.papareact.com/28w",
        screen: "EatsScreen", // change later
    },
    
];




const NavOptions= () => {
    return(
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({item}) =>  (
        <TouchableOpacity 
        style= {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        <view>

            <Image
            style={{width: 120, height: 120, resizeMode: "contain"}}

            source = {{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright" 
            color="white"
            type="antdesign"
           
            />
        

        </view>
        </TouchableOpacity>

      )}

      />
    );
};

export default NavOptions;

