import styled from "styled-components/native";
import { Dimensions, ViewProps, Animated } from "react-native";

interface allViewProps extends ViewProps{
  xSize?: number;
  ySize?: number;
  BgColor?: string;
  done?: boolean;
}

interface maxHeightProps extends ViewProps{
  ySize: number;
  xSize?: number;
  maxHeight?: number;
}

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
  background-color: #F0EDF2;
  margin: 0;
  padding: 0;
  min-height: ${screenHeight}px;
`;

export const RowView = styled.View<allViewProps>`
  width: ${(props: allViewProps) => props.xSize}%;
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
  height: ${screenHeight * 0.097}px;
  align-items: right;
`;

export const SearchArea = styled.View<allViewProps>`
  width: ${(props: allViewProps) => props.xSize}%;
  z-index: 11;
  position: absolute;
  top: ${screenHeight * 0.1875}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TaskStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: ${screenHeight * 0.0295}px;
`;

export const MainTaskContainer = styled.View`
  top: ${screenHeight * 0.277}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: ${screenHeight * 0.597}px;
`;

export const StatusWCount = styled.View<allViewProps>`
  flex-direction: row;
  justify-content: space-between;
  width: ${(props: allViewProps) => props.xSize}%;
`;

export const CreatedView = styled.View`
  background-color: #ddd2ef;
  align-items: center;
  width: ${screenWidth * 0.065}px;
  justify-content: center;
  border-radius: 99px;
`;

export const DoneView = styled.View`
  background-color: #bfe3d0;
  align-items: center;
  width: ${screenWidth * 0.065}px;
  justify-content: center;
  border-radius: 99px;
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

export const FlatListItems = styled.View<allViewProps>`
  width: 94.8%;
  height: ${screenHeight * 0.093}px;
  justify-content: space-around;
  align-self: center;
  gap: 8px;
  border-radius: 8px;
  padding: 12px;
  background-color: ${(props: allViewProps) => (props.done ? "#F0EDF2" : "#E0DCE4")};
  flex-direction: row;
  border-width: 1px;
  border-color: #d1cbd7;
  margin-bottom: 12px;
`;

export const FlatListTextView = styled.View<maxHeightProps>`
  height: ${(props: maxHeightProps) => Math.min(props.ySize, props.maxHeight || props.ySize)}px;
  width: ${(props: maxHeightProps) => props.xSize}%;
  overflow: hidden;
`;

export const ModalContainer = styled.View<allViewProps>`
  width: 90%;
  max-height: ${screenHeight * 0.315}px;
  background-color: ${(props: allViewProps) => props.BgColor || "#f0edf2"};
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
  
  align-self: center;
`;

export const ErrorContainer = styled.View<allViewProps>`
  width: 85%;
  height: ${screenHeight * 0.24}px;
  background-color: ${(props: allViewProps) => props.BgColor || "#f0edf2"};
  border-width: 1px;
  border-color: #d1cbd7;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  padding: 12px;
  gap: 8px;
`;

export const SplashView = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: ${screenHeight}px;
  background-color: #F0EDF2;
`;

export const AnimatedContainer = styled(Animated.View)<allViewProps>`
  top: ${screenHeight * 0.277}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: ${screenHeight * 0.597}px;
`;