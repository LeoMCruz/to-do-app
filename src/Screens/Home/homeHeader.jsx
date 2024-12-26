import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { Container, Content, Header, LogoutView } from "../../Components/views";
import { FakeButton } from "../../Components/button";
import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/logout.svg";

export default function HomeHeader() {
  return (
    <Header>
      <LogoutView>
        <FakeButton>
          <Logout />
        </FakeButton>
      </LogoutView>
      <Logo />
    </Header>
  );
}
