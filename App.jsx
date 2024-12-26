import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes></StackRoutes>
    </NavigationContainer>
  );
}
