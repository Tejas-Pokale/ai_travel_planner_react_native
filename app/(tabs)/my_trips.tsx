import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import StartNewTripCard from "@/components/MyTrips/start_new_trip_card";

export default function MyTrips() {

  const [userTrips , setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:20}}>
         <Text style={{fontFamily:'outfit-bold',fontSize:30}}>My Trips</Text>
         <AntDesign name="pluscircle" size={24} color="black" />
      </View>

      {
        userTrips?.length == 0 ? <StartNewTripCard/> : null 
      }
      
    </View>
  );
}
