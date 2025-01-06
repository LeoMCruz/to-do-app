import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import {
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
import { AuthContext } from "../../../Context/auth";

interface Task {
  id: number;
  tarefa: string;
  status: boolean;
}

export default function TaskArea({ setFilter, filteredTasks, fullTasks, setList }
  : { setFilter: (filter: string) => void, filteredTasks: Task[], fullTasks: Task[], setList: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [taskText, setTaskText] = useState("");
  const [taskStatus, setTaskStatus] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const {editTask, getTasks} = useContext(AuthContext);

  const switchToEditModal = () => {
    setOpenModal((prev: boolean) => !prev);
    setTimeout(() => {
      setEditModalVisible((prev: boolean) => !prev);
    }, 0);
  };

  function handleOpenModal(id: number, task: string, status: boolean) {
    setSelectedTask(id);
    setTaskText(task);
    setTaskStatus(status);
    setOpenModal((prev: boolean) => !prev);
  }

  async function handleCheck(taskId: number, task: string, status: boolean){
    await editTask({taskId, task, status});
    const allTasks = await getTasks();
    setList(allTasks);
  }

  const RenderFlatList = ({ item }: { item: Task }) => (
    <FlatListItems done={item.status}>
       {item.status? (
          <ItemButton xSize={20} ySize={20} onPress={() => handleCheck(item.id, item.tarefa, false)}>
            <Vector width={16.25} height={16.25} />
          </ItemButton>
       ):(
        <ItemButton xSize={20} ySize={20} onPress={() => handleCheck(item.id, item.tarefa, true)}>
        <VectorEmpty width={16.25} height={16.25} />
      </ItemButton>
       )}
      <FlatListTextView xSize={80} ySize={60}>
        <ItemText done={item.status}>{item.tarefa}</ItemText>
      </FlatListTextView>
      <ItemButton xSize={24} ySize={24} onPress={() => handleOpenModal(item.id, item.tarefa, item.status)}>
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
          {fullTasks.filter((item) => item.status).length > 0 ? (
            <DoneView>
              <DoneText>
                {fullTasks.filter((item) => item.status).length}
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
            setList = {setList}
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
            setList={setList}
            status = {taskStatus} 
          />
        }
      />
    </MainTaskContainer>
  );
}
