import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Platform, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  Header,
  LogoutView,
} from "../../../Components/views";
import { FakeButton } from "../../../Components/button";
import Logo from "../../../assets/Logo.svg";
import Logout from "../../../assets/logout.svg";
import { AuthContext } from "../../../Context/auth";

export default function HomeHeader() {
  const {logout} = useContext(AuthContext);

  const handleLogout = async() =>{
    try {
        logout();
    } catch (error) {
      
    }
  }
  return (
    <Header>
      <LogoutView>
        <FakeButton onPress={() => handleLogout()}>
          <Logout />
        </FakeButton>
      </LogoutView>
      <Logo />
    </Header>
  );
}
