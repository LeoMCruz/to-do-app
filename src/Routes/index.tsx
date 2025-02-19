import React, { useContext } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import SignIn from "../Screens/SignIn";
import Home from "../Screens/Home";
import { AuthContext } from "../Context/auth";

export type RootStackParams = {
  Home: undefined;
  SignIn: undefined;
}
export type StackNavigationProp = NativeStackNavigationProp<RootStackParams>;
const Stack = createNativeStackNavigator<RootStackParams>();

export default function StackRoutes(): JSX.Element {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator >
      {isAuthenticated? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

      ):
      (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        
      )
      }
    </Stack.Navigator>
  );
}
