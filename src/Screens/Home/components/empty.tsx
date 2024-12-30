import React from "react";
import { ZeroTask, SvgContainer } from "../../../Components/views";
import Notes from "../../../assets/ClipboardTextRegular.svg";
import { FineText, BoldText } from "../../../Components/texts";

export default function Empty() {
  return (
    <ZeroTask>
      <SvgContainer>
        <Notes />
      </SvgContainer>
      <BoldText>Você ainda não tem tarefas cadastradas</BoldText>
      <FineText>Crie tarefas e organize seus itens a fazer</FineText>
    </ZeroTask>
  );
}
