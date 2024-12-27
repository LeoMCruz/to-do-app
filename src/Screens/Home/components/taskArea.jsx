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
  FlatListTextView,
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
import { DeleteEditModal } from "./modals";

export default function TaskArea() {
  const [deleteEditModalVisible, setDeleteEditModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskText, setTaskText] = useState("");

  const list = [
    {
      id: 1,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true,
    },
    {
      id: 2,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true,
    },
    {
      id: 3,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true,
    },
    {
      id: 4,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 5,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 6,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: 7,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
  ];

  const sortedList = [...list].sort((a, b) => {
    if (a.done === b.done) return 0;
    return a.done ? 1 : -1;
  });

  function handleDeleteEditModal(id, task) {
    setSelectedTask(id);
    setDeleteEditModalVisible((prev) => !prev);
    setTaskText(task);
  }

  // { item: { id: string; title: string; done: boolean } })

  const RenderFlatList = ({ item }) => (
    <FlatListItems done={item.done}>
      <ItemButton>{item.done ? <Vector /> : <VectorEmpty />}</ItemButton>
      <FlatListTextView xSize={80} ySize={60}>
        <ItemText done={item.done}>{item.task}</ItemText>
      </FlatListTextView>
      <ItemButton onPress={() => handleDeleteEditModal(item.id, item.task)}>
        <Trash width={24} height={24} />
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
          {list.length > 0 ? (
            <CreatedView>
              <CreatedText>{list.length}</CreatedText>
            </CreatedView>
          ) : (
            <></>
          )}
        </StatusWCount>
        <StatusWCount xSize={32}>
          <FakeButton>
            <BoldText>Concluidas</BoldText>
          </FakeButton>
          {list.filter((item) => item.done).length > 0 ? (
            <DoneView>
              <DoneText>{list.filter((item) => item.done).length}</DoneText>
            </DoneView>
          ) : (
            <></>
          )}
        </StatusWCount>
      </TaskStatus>
      <FlatList
        data={sortedList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderFlatList}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%", paddingBottom: 100 }}
      />
      <DeleteEditModal
        visible={deleteEditModalVisible}
        closeModal={() => setDeleteEditModalVisible(false)}
        taskId={selectedTask}
        task={taskText}
      />
    </MainTaskContainer>
  );
}
