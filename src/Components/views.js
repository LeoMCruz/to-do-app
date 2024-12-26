import styled from "styled-components";
import { Dimensions } from "react-native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const screenWidth = Dimensions.get("window").width;
export const Container = styled.ScrollView``;

const screenHeight = Dimensions.get("window").height;

export const Content = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: ${screenHeight}px;
`;

export const RowView = styled.View`
  width: ${(props) => props.xSize}%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoView = styled.View`
  align-items: center;
  margin-bottom: 20%;
  width: 90%;
`;

export const GeneralView = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  z-index: 5;
  top: 0;
  position: absolute;
  align-items: center;
  height: ${screenHeight * 0.22}px;
  background-color: #e0dce4;
  justify-content: center;
`;

export const LogoutView = styled.View`
  position: absolute;
  top: 13%;
  right: 5%;
  z-index: 10;
`;

export const BottomView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${screenHeight * 0.115}px;
  align-items: right;
`;

export const SearchArea = styled.View`
  width: ${(props) => props.xSize}%;
  z-index: 11;
  position: absolute;
  top: ${screenHeight * 0.185}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TaskStatus = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  top: ${screenHeight * 0.3}px;
  width: 90%;
`;

export const StatusWCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => props.xSize}%;
`;

export const CreatedView = styled.View`
  background-color: #ddd2ef;
  align-items: center;
  width: ${screenWidth * 0.065}px;
  justify-content: center;
  border-radius: 50%;
`;

export const DoneView = styled.View`
  background-color: #bfe3d0;
  align-items: center;
  width: ${screenWidth * 0.065}px;
  justify-content: center;
  border-radius: 50%;
`;

export const ZeroTask = styled.View``;
