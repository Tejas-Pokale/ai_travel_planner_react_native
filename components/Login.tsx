import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter()

  return (
    <View>
      <Image
        source={require("../assets/images/login.jpg")}
        style={{ width: "100%", height: 500 }}
      />

      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: -20,
          height: "100%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 25,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop:20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights."
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            marginTop: "25%",
            padding: 15,
          }}

          onPress={()=>router.push('/auth/sign-in')}
        >
          <Text
            style={{ color: Colors.WHITE, fontSize: 17, textAlign: "center" }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
