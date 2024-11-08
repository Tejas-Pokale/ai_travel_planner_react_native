import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { auth } from "../../../configs/FirebaseConfigs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.SHORT);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ToastAndroid.show("Sign in successful", ToastAndroid.SHORT);
        router.replace('/my_trips');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        ToastAndroid.show("Invalid email/password", ToastAndroid.SHORT);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Let's sign you in
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome back
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        You've been missed
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          placeholder="enter email"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          placeholder="enter password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={onSignIn}>
        <Text
          style={{
            fontFamily: "outfit",
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 99,
            color: Colors.WHITE,
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.replace("/auth/sign-up")}
      >
        <Text
          style={{
            fontFamily: "outfit",
            backgroundColor: Colors.WHITE,
            padding: 15,
            borderRadius: 99,
            color: Colors.PRIMARY,
            textAlign: "center",
            fontSize: 17,
            borderWidth: 1,
          }}
        >
          Create account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});
