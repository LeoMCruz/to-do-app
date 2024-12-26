import React, { useState, useContext, useEffect } from "react";
import {
  ZeroTask,
  TaskStatus,
  CreatedView,
  DoneView,
  StatusWCount,
} from "../../Components/views";
import {
  BoldText,
  FineText,
  CreatedText,
  DoneText,
} from "../../Components/texts";
import { FakeButton } from "../../Components/button";

export default function TaskArea() {
  return (
    <TaskStatus>
      <StatusWCount xSize={42}>
        <FakeButton>
          <BoldText>Tarefas Criadas</BoldText>
        </FakeButton>
        <CreatedView>
          <CreatedText>10</CreatedText>
        </CreatedView>
      </StatusWCount>
      <StatusWCount xSize={32}>
        <FakeButton>
          <BoldText>Concluidas</BoldText>
        </FakeButton>
        <DoneView>
          <DoneText>5</DoneText>
        </DoneView>
      </StatusWCount>
    </TaskStatus>
  );
}
