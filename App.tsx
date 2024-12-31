import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/Routes";
import { AuthProvider } from "./src/Context/auth";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import Splash from "./src/Components/splash";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Splash/>;
  } else {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
}
