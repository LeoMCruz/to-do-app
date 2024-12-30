import styled from "styled-components/native";
import {TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
  ySize: number;
  xSize: number;
  bgColor?: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: #6f3cc3;
  height: ${(props: ButtonProps) => props.ySize}px;
  width: ${(props: ButtonProps) => props.xSize}%;
  border-radius: 8px;
`;

export const FakeButton = styled.TouchableOpacity``;

export const BottomButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 5%;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: #6f3cc3;
  height: ${(props: ButtonProps) => props.ySize}px;
  width: ${(props: ButtonProps) => props.xSize}%;
  border-radius: 8px;
`;

export const ItemButton = styled.TouchableOpacity<ButtonProps>`
  height: ${(props: ButtonProps) => props.ySize}px;
  width: ${(props: ButtonProps) => props.xSize}px;
  align-items: center;
  justify-content: center;
`;

export const ModalButton = styled.TouchableOpacity<ButtonProps>`
  gap: 8px;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color:${(props: ButtonProps) => props.bgColor || "#6f3cc3"};
  height: ${(props: ButtonProps) => props.ySize}px;
  width: ${(props: ButtonProps) => props.xSize}%;
  border-radius: 8px;
`;

export const ModalFakeButton = styled.TouchableOpacity`
  left: 60px;
  bottom: 0;
`;
