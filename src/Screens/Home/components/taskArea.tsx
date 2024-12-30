import React, { useState } from "react";
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
import Vector from "../../../assets/vector.svg";
import VectorEmpty from "../../../assets/vectorEmpty.svg";
import { DeleteEditModal, EditModal, MainModal } from "./modals";

interface Task {
  id: number;
  task: string;
  done: boolean;
}

export default function TaskArea({ setFilter, filteredTasks, fullTasks }: { setFilter: (filter: string) => void, filteredTasks: Task[], fullTasks: Task[] }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [taskText, setTaskText] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);

  const switchToEditModal = () => {
    setOpenModal((prev: boolean) => !prev);
    setTimeout(() => {
      setEditModalVisible((prev: boolean) => !prev);
    }, 0);
  };

  function handleOpenModal(id: number, task: string) {
    setSelectedTask(id);
    setTaskText(task);
    setOpenModal((prev: boolean) => !prev);
  }

  const RenderFlatList = ({ item }: { item: Task }) => (
    <FlatListItems done={item.done}>
      <ItemButton xSize={20} ySize={20}>{item.done ? <Vector width={16.25} height={16.25}/>
       : <VectorEmpty width={16.25} height={16.25}/>}</ItemButton>
      <FlatListTextView xSize={80} ySize={60}>
        <ItemText done={item.done}>{item.task}</ItemText>
      </FlatListTextView>
      <ItemButton xSize={24} ySize={24} onPress={() => handleOpenModal(item.id, item.task)}>
        <Trash width={16} height={16} />
      </ItemButton>
    </FlatListItems>
  );

  return (
    <MainTaskContainer>
      <TaskStatus>
        <StatusWCount xSize={38}>
          <FakeButton onPress={() => setFilter("all")}>
            <BoldText>Tarefas Criadas</BoldText>
          </FakeButton>
          {fullTasks.length > 0 ? (
            <CreatedView>
              <CreatedText>{fullTasks.length}</CreatedText>
            </CreatedView>
          ) : (
            <></>
          )}
        </StatusWCount>
        <StatusWCount xSize={30}>
          <FakeButton onPress={() => setFilter("done")}>
            <BoldText>Concluidas</BoldText>
          </FakeButton>
          {fullTasks.filter((item) => item.done).length > 0 ? (
            <DoneView>
              <DoneText>
                {fullTasks.filter((item) => item.done).length}
              </DoneText>
            </DoneView>
          ) : (
            <></>
          )}
        </StatusWCount>
      </TaskStatus>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item: Task ) => item.id.toString()}
        renderItem={RenderFlatList}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%", paddingBottom: 100 }}
      />
      <MainModal
        modalVisible={openModal}
        closeModal={() => setOpenModal((prev: boolean) => !prev)}
        children={
          <DeleteEditModal
            taskId={selectedTask}
            task={taskText}
            closeModal={() => setOpenModal((prev: boolean) => !prev)}
            openEdit={switchToEditModal}
          />
        }
      />
      <MainModal
        modalVisible={editModalVisible}
        closeModal={() => setEditModalVisible((prev: boolean) => !prev)}
        children={
          <EditModal
            taskId={selectedTask}
            task={taskText}
            closeModal={() => setEditModalVisible((prev: boolean) => !prev)}
          />
        }
      />
    </MainTaskContainer>
  );
}
