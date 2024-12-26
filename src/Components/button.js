import styled from "styled-components";
import { Dimensions } from "react-native";

export const Button = styled.TouchableOpacity`
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: #6f3cc3;
  height: ${(props) => props.ySize}px;
  width: ${(props) => props.xSize}%;
  border-radius: 8px;
`;

export const FakeButton = styled.TouchableOpacity``;

export const BottomButton = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 5%;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: #6f3cc3;
  height: ${(props) => props.ySize}px;
  width: ${(props) => props.xSize}%;
  border-radius: 8px;
`;

export const ItemButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;
