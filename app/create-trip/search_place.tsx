import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SearchPlace() {
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
        paddingTop: 50,
      }}
    >
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 25,
          fontFamily: "outfit",
          fontSize: 17,
        }}
        placeholder="search any place"
      />

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            marginTop: 20,
            padding: 15,
            borderRadius: 15,
            width: 200,
          }}

          onPress={()=> router.push('/create-trip/select_traveler')}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
