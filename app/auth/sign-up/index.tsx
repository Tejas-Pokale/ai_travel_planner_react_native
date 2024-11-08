import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../configs/FirebaseConfigs';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fullname,setFullname] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreatAccount = ()=>{

    if(!email && !password && !fullname){
      ToastAndroid.show('Please enter all details',ToastAndroid.SHORT);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.info(user);
    router.replace('/my_trips');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage);
    // ..
  });
  }

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: Colors.WHITE,
        padding: 25,
        paddingTop: 50,
      }}
    >

      <Text style={{fontFamily:'outfit-bold',fontSize:30}}>Create new account</Text>

      
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>User full name</Text>
        <TextInput
          placeholder="enter full name"
          style={styles.textInput}
          keyboardType="default"
          onChangeText={(value)=>setFullname(value)}
        />
      </View>
      
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          placeholder="enter email"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(value)=>setEmail(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          placeholder="enter password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(value)=>setPassword(value)}
        />
      </View>

      <TouchableOpacity style={{ marginTop: 40 }} onPress={onCreatAccount}>
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
          Create account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={()=>router.replace('/auth/sign-in')}>
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
          Sign in
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