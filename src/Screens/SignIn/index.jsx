import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Platform, ActivityIndicator, StatusBar } from "react-native";
import {
  Container,
  Content,
  LogoView,
  GeneralView,
  RowView,
  SafeAreaView,
} from "../../Components/views";
import { Button } from "../../Components/button";
import Logo from "../../assets/Logo.svg";
import { Input } from "../../Components/Inputs";
import Eye from "../../assets/eye";
import EyeOff from "../../assets/eye-off";
import { ButtonText } from "../../Components/texts";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Container>
        <Content behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <StatusBar barStyle="auto" />
          <LogoView>
            <Logo />
          </LogoView>
          <GeneralView>
            <Input
              xSize={100}
              ySize={55}
              placeholder="Username:"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
            <RowView xSize={100}>
              <Input
                xSize={80}
                ySize={55}
                placeholder="Senha"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                xSize={18}
                ySize={55}
                onPress={() => setHidePassword(!hidePassword)}
              >
                {hidePassword ? <Eye /> : <EyeOff />}
              </Button>
            </RowView>
          </GeneralView>
          <Button
            onPress={() => navigation.navigate("Home")}
            xSize={90}
            ySize={55}
          >
            <ButtonText>Login</ButtonText>
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
