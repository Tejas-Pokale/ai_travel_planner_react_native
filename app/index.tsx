import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Redirect } from "expo-router";
import Login from "@/components/Login";
import { auth } from "@/configs/FirebaseConfigs";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // `currentUser` will be `User | null`
      setLoading(false);
    });
    
    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"/my_trips"} /> : <Login />}
    </View>
  );
}
