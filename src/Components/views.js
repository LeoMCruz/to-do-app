import styled from "styled-components";
import { Dimensions, Modal } from "react-native";

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
  bottom: 20px;
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
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 23px;
`;

export const MainTaskContainer = styled.View`
  top: ${screenHeight * 0.3}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: ${screenHeight * 0.548}px;
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

export const ZeroTask = styled.View`
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.28}px;
  border-top-width: 1px;
  border-color: #e0dce4;
  justify-content: center;
  align-items: center;
`;

export const SvgContainer = styled.View`
  margin-bottom: 16px;
`;

export const FlatListItems = styled.View`
  width: 95.5%;
  height: ${screenHeight * 0.1}px;
  justify-content: center;
  align-self: center;
  gap: 8px;
  border-radius: 8px;
  padding: 12px;
  background-color: ${(props) => (props.done ? "#F0EDF2" : "#E0DCE4")};
  flex-direction: row;
  border-width: 1px;
  border-color: #d1cbd7;
  margin-bottom: 12px;
  margin: 4px 0;
`;

export const FlatListTextView = styled.View`
  height: ${(props) => props.ySize}px;
  width: ${(props) => props.xSize}%;
`;

export const ModalContainer = styled.View`
  width: 90%;
  height: ${screenHeight * 0.26}px;
  background-color: #f0edf2;
  border-width: 1px;
  border-color: #d1cbd7;
  border-radius: 8px;
  padding: 12px;
  gap: 8px;
`;

export const ModalMainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
`;

export const ModalBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 12px;
  align-self: center;
`;
