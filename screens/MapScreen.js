import React, { Component } from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const MapScreen= () => {
    return(
        <View> 
        <View style={tw`h-1/2`}></View>
          <Map

          />


        <View style={tw`h-1/2`}></View>

        </View>
       
    );
};

export default MapScreen;
