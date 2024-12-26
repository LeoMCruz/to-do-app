import styled from "styled-components";

export const Input = styled.TextInput`
  border-radius: 8px;
  padding-left: 8px;
  gap: 8px;
  border-width: 2px;
  border-color: #e0dce4;
  background-color: #f0edf2;
  height: ${(props) => props.ySize}px;
  width: ${(props) => props.xSize}%;
  margin-bottom: 12px;
`;
