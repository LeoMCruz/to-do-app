import styled from "styled-components/native";
import { TextInputProps } from "react-native";
interface InputProps extends TextInputProps {
  ySize: number;
  xSize: number;
  maxHeight?:number;
  defaultValue?: string;
  isValid?: boolean;
  onChangeText?: (text: string) => void;
}

export const Input = styled.TextInput<InputProps>`
  border-radius: 8px;
  padding-left: 8px;
  gap: 8px;
  border-width: 2px;
  border-color: #e0dce4;
  background-color: #f0edf2;
  height: ${(props: InputProps) => props.ySize}px;
  width: ${(props: InputProps) => props.xSize}%;
  margin-bottom: 12px;
  font-family: "Inter_400Regular";
  font-size: 16px;
`;

export const LoginInput = styled.TextInput<InputProps>`
  border-radius: 8px;
  padding-left: 8px;
  gap: 8px;
  border-width: 2px;
  border-color: ${(props: InputProps) => props.isValid? "#e0dce4" : "#C2464D" };
  background-color: #f0edf2;
  height: ${(props: InputProps) => props.ySize}px;
  width: ${(props: InputProps) => props.xSize}%;
  margin-bottom: 12px;
  font-family: "Inter_400Regular";
  font-size: 16px;
`;

export const ModalInput = styled.TextInput<InputProps>`
  border-radius: 8px;
  padding-left: 8px;
  gap: 8px;
  border-width: 2px;
  border-color: #e0dce4;
  background-color: #f0edf2;
  height: ${(props: InputProps) => Math.min(props.ySize, props.maxHeight || props.ySize)}%;
  width: ${(props: InputProps) => props.xSize}%;
  margin-bottom: 12px;
  text-align: justify;
  font-family: "Inter_400Regular";
  max-height: ${(props: InputProps) => props.maxHeight || '25%'}px;
  font-size: 16px;
`;