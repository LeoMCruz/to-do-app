import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Platform, ActivityIndicator, StatusBar } from "react-native";
import {
  Container,
  Content,
  SafeAreaView,
  BottomView,
  SearchArea,
} from "../../Components/views";
import HomeHeader from "./components/homeHeader";
import { BottomButton, Button } from "../../Components/button";
import PlusCircle from "../../assets/PlusCircleRegular.svg";
import SearchContainer from "./components/searchContainer";
import { ButtonText } from "../../Components/texts";
import TaskArea from "./components/taskArea";

export default function Home() {
  return (
    <SafeAreaView>
      <Content behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <StatusBar barStyle="auto" />
        <HomeHeader />
        <SearchContainer />
        <TaskArea />

        <BottomView>
          <BottomButton xSize={30} ySize={52}>
            <ButtonText>Criar</ButtonText>
            <PlusCircle width={20} height={20} />
          </BottomButton>
        </BottomView>
      </Content>
    </SafeAreaView>
  );
}
