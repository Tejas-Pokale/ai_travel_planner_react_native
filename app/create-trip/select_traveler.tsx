import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { SelectTravelesList } from "@/constants/OptionsList";
import OptionCard from "@/components/CreateTrip/option_card";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Search",
    });
  });

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
        padding: 25,
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          color: Colors.PRIMARY,
          fontFamily: "outfit-bold",
          fontSize: 35,
        }}
      >
        Who's travelling
      </Text>

      <View style={{}}>
        <Text style={{fontFamily:'outfit-bold',color:Colors.GRAY,fontSize:20}}>choose your traveles</Text>

        <FlatList 
        data={SelectTravelesList}
        renderItem={
          ({item,index})=>(
            <OptionCard option={item}/>
          )
        }
        />
      </View>
    </View>
  );
}
