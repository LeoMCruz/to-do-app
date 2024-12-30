import styled from "styled-components/native";
import { TextProps } from "react-native-svg";

interface allTextProps extends TextProps{
  done?: boolean;
  letterColor?: string;
}

export const ButtonText = styled.Text<allTextProps>`
  font-size: 16px;
  color: ${(props: allTextProps) => props.letterColor || "#f0edf2"};
  font-family: "Inter_400Regular";
`;

export const ButtonBoldText = styled.Text`
  font-size: 14px;
  color: #f0edf2;
  font-family: "Inter_700Bold";
`;

export const BoldText = styled.Text`
  font-size: 14px;
  font-family:"Inter_600SemiBold";
  color: #6b6572;
`;

export const FineText = styled.Text`
  font-size: 14px;
  font-family: "Inter_400Regular";
  color: #6b6572;
`;

export const CreatedText = styled.Text`
  color: #6f3cc3;
  font-size: 12px;
  font-weight: bold;
  font-family: "Inter_700Bold";
`;

export const DoneText = styled.Text`
  color: #2d6c4a;
  font-size: 12px;
  font-weight: bold;
  font-family: "Inter_700Bold";
`;

export const ItemText = styled.Text<allTextProps>`
  font-size: 12px;
  font-family: "Inter_400Regular";
  text-align: justify;
  color: #333;
  text-decoration: ${(props: allTextProps) => (props.done ? "line-through" : "none")};
`;
