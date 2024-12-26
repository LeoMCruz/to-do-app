import styled from "styled-components";
import { scale, verticalScale } from "react-native-size-matters";

export const ButtonText = styled.Text`
  font-size: ${scale(16)}px;
  color: #f0edf2;
`;

export const BoldText = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: bold;
  color: #6b6572;
`;

export const FineText = styled.Text`
  font-size: ${scale(14)}px;
  color: #6b6572;
`;

export const CreatedText = styled.Text`
  color: #6f3cc3;
  font-size: 12px;
  font-weight: bold;
`;

export const DoneText = styled.Text`
  color: #2d6c4a;
  font-size: 12px;
  font-weight: bold;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #333;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;
