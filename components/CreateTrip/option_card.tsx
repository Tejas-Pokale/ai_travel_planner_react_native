import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import MyIcon from "../../assets/svgs/couple.svg";

export default function OptionCard({ option }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 15,
        margin: 10,
      }}
    >
      <View style={{flexDirection:"row",gap:15,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:'70%'}}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: Colors.PRIMARY,
              fontSize: 20,
            }}
          >
            {option.title}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: Colors.GRAY,
              fontSize: 15,
            }}
          >
            {option.desc}
          </Text>
        </View>

        {/* Here render a svg icon */}
        <MyIcon width={30} height={30} />
      </View>
    </View>
  );
}
