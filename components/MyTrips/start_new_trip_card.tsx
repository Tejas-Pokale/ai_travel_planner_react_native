import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {

    const router = useRouter()

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experinece! Get Started below
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 10,
          paddingHorizontal: 15,
          width: "100%",
          borderRadius: 25,
        }}
        onPress={() => router.push({ pathname: '/create-trip/search_place' })}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontSize: 17,
            fontFamily: "outfit-medium",
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
