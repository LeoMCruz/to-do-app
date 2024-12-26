import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native";
import {
  ZeroTask,
  TaskStatus,
  CreatedView,
  DoneView,
  StatusWCount,
  MainTaskContainer,
  FlatListItems,
} from "../../../Components/views";
import {
  BoldText,
  FineText,
  CreatedText,
  DoneText,
  ItemText,
} from "../../../Components/texts";
import { FakeButton, ItemButton } from "../../../Components/button";
import Empty from "./empty";
import Trash from "../../../assets/TrashRegular.svg";
import Vector from "../../../assets/vector";
import VectorEmpty from "../../../assets/vectorEmpty";

export default function TaskArea() {
  const list = [
    {
      id: 1,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 2,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 3,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 4,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 5,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true,
    },
    {
      id: 6,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true,
    },
  ];

  // { item: { id: string; title: string; done: boolean } })

  const RenderFlatList = ({ item }) => (
    <FlatListItems done={item.done}>
      <ItemButton>{item.done ? <Vector /> : <VectorEmpty />}</ItemButton>
      <ItemText done={item.done}>{item.task}</ItemText>
      <ItemButton>
        <Trash />
      </ItemButton>
    </FlatListItems>
  );

  return (
    <MainTaskContainer>
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
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderFlatList}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        style={{
          flexGrow: 1,
        }}
      />
    </MainTaskContainer>
  );
}
