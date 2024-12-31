import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState, useContext, useEffect, } from "react";
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
import Eye from "../../assets/eye.svg";
import EyeOff from "../../assets/eye-off.svg";
import { ButtonText } from "../../Components/texts";
import { RootStackParams } from "../../Routes";
import { AuthContext } from "../../Context/auth";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {login} = useContext(AuthContext);

  const handleLogin = async() => {
    try {
      await login({
        username: userName,
        pass: password
      })
    } catch (error) {
      
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <Content behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
          <StatusBar barStyle="light-content" />
          <LogoView>
            <Logo />
          </LogoView>
          <GeneralView>
            <Input
              xSize={100}
              ySize={52}
              placeholder="Username:"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
            <RowView xSize={100}>
              <Input
                xSize={82}
                ySize={52}
                placeholder="Senha"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                xSize={16}
                ySize={52}
                onPress={() => setHidePassword(!hidePassword)}
              >
                {hidePassword ? <Eye width={22} height={22} /> : <EyeOff width={22} height={22}/>}
              </Button>
            </RowView>
          </GeneralView>
          <Button
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
