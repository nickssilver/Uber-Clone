import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";



const MapScreen= () => {
  const Stack = createNativeStackNavigator();
    return(
        <View>  
        <View style={tw`h-1/2`}></View>
          <Map

          />


        <View style={tw`h-1/2`}>
           <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}

            />
           </Stack.Navigator>
        </View>
        </View>
       
    );
};

export default MapScreen;
