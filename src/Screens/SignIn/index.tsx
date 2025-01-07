import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState, useContext,} from "react";
import { Platform, StatusBar } from "react-native";
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
import { LoginInput } from "../../Components/Inputs";
import Eye from "../../assets/eye.svg";
import EyeOff from "../../assets/eye-off.svg";
import { ButtonText, LoginErrorText } from "../../Components/texts";
import { RootStackParams } from "../../Routes";
import { AuthContext } from "../../Context/auth";
import { MainModal, ExpiredTokenModal } from "../Home/components/modals";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [res, setRes] = useState(true);
  const {login} = useContext(AuthContext);

  const handleLogin = async() => {
    try {
      setRes(await login({
        username: userName,
        pass: password
      }))
    } catch (error) {
      
    }
  }

  return (
    <SafeAreaView testID="signIn">
      <Container>
        <Content behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
          <StatusBar barStyle="light-content" />
          <LogoView>
            <Logo />
          </LogoView>
          <GeneralView>
            <LoginInput
              xSize={100}
              ySize={52}
              placeholder="Username:"
              isValid={res}
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
            {!res? <LoginErrorText>Username inválido</LoginErrorText> : <></> }
            <RowView xSize={100}>
              <LoginInput
                xSize={82}
                ySize={52}
                isValid={res}
                placeholder="Senha"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                testID="handle-secureTextEntry"
                xSize={16}
                ySize={52}
                onPress={() => setHidePassword(!hidePassword)}
              >
                {hidePassword ? <Eye width={22} height={22} /> : <EyeOff width={22} height={22}/>}
              </Button>
            </RowView>
            {!res? <LoginErrorText>Senha inválida</LoginErrorText> : <></> }
            
          </GeneralView>
          <Button
            testID="loginButton"
            onPress={() => handleLogin()}
            xSize={90}
            ySize={52}
          >
            <ButtonText>Login</ButtonText>
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
