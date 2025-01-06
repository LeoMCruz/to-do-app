import React, { useContext, useState } from "react";
import Modal from "react-native-modal";
import {
  ModalContainer,
  ModalMainView,
  ModalHeader,
  FlatListTextView,
  ModalBottom,
  RowView,
  ErrorContainer
} from "../../../Components/views";
import { BoldText, ItemText, ButtonText } from "../../../Components/texts";
import { FakeButton, Button, ModalButton, ModalFakeButton } from "../../../Components/button";
import Close from "../../../assets/close.svg";
import PlusCircle from "../../../assets/PlusCircleRegular.svg";
import { Input, ModalInput } from "../../../Components/Inputs";
import { Dimensions } from "react-native";
import { AuthContext } from "../../../Context/auth";
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MAX_INPUT_HEIGHT = SCREEN_HEIGHT * 0.25;

interface Task {
  id: number;
  tarefa: string;
  status: boolean;
}


export function DeleteEditModal({ closeModal, taskId, task, openEdit, setList }
  : { closeModal: () => void, taskId: number | null, task: string, openEdit: () => void, setList: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const {deleteTask, getTasks} = useContext(AuthContext);

  async function handleDeleteTask(){
    await deleteTask({taskId});
    const allTasks = await getTasks();
    setList(allTasks);
    closeModal();
  }

  return (
        <ModalMainView>
          <ModalContainer>
            <ModalHeader>
              <BoldText>Tarefa: {taskId}</BoldText>
              <FakeButton onPress={closeModal}>
                <Close width={24} height={24} />
              </FakeButton>
            </ModalHeader>
            <FlatListTextView xSize={92} ySize={80}>
              <ItemText done={false}>{task}</ItemText>
            </FlatListTextView>
            <ModalBottom>
              <Button xSize={49} ySize={53} onPress={openEdit}>
                <ButtonText>Editar</ButtonText>
              </Button>
              <Button xSize={49} ySize={53} onPress={() => handleDeleteTask()}>
                <ButtonText>Remover</ButtonText>
              </Button>
            </ModalBottom>
          </ModalContainer>
        </ModalMainView>
  );
}

export function EditModal({ closeModal, taskId, task, setList, status }
  : { closeModal: () => void, taskId: number | null, task: string, 
    setList: React.Dispatch<React.SetStateAction<Task[]>>, status: boolean }) {
  const [editedTask, setEditedTask] = useState(task);
  const [inputHeight, setInputHeight] = useState(0);
  const {editTask, getTasks} = useContext(AuthContext);

  const handleContentSizeChange = (event: {
    nativeEvent: { 
      contentSize: { 
        height: number 
      } 
    }
  }) => {
    const newHeight = Math.min(
      Math.max(event.nativeEvent.contentSize.height),
      MAX_INPUT_HEIGHT
    );
    setInputHeight(newHeight);
  };

  async function handleEditTask(){
    await editTask({taskId, task: editedTask, status});
    const allTasks = await getTasks();
    setList(allTasks);
    closeModal();
  }

  return (
    <ModalMainView>
        <ModalContainer>
          <ModalHeader>
            <BoldText>Editar Tarefa: {taskId}</BoldText>
            <FakeButton onPress={closeModal}>
              <Close width={24} height={24} />
            </FakeButton>
          </ModalHeader>
          <RowView xSize={100}>
            <FlatListTextView xSize={77} ySize={inputHeight} maxHeight={MAX_INPUT_HEIGHT}>
              <ModalInput
                xSize={100} ySize={100}
                scrollEnabled={true}
                multiline={true}
                onContentSizeChange={handleContentSizeChange}
                textAlignVertical="top"
                textBreakStrategy="simple"
                value={editedTask}
                onChangeText={(text: string) => setEditedTask(text)}
                maxHeight={MAX_INPUT_HEIGHT}
              />
            </FlatListTextView>
            <ModalButton xSize={18} ySize={57} onPress={() => handleEditTask()}>
              <PlusCircle width={30} height={20} />
            </ModalButton>
          </RowView>
        </ModalContainer>
      </ModalMainView>
  );
}

export function CreateTaskModal({closeModal, setList}: {closeModal: () => void, setList: React.Dispatch<React.SetStateAction<Task[]>>}){
  const [inputHeight, setInputHeight] = useState(0);
  const [task, setTask] = useState("");
  const {createTask, getTasks} = useContext(AuthContext);

  const handleContentSizeChange = (event: {
    nativeEvent: { 
      contentSize: { 
        height: number 
      } 
    }
  }) => {
    const newHeight = Math.min(
      Math.max(61, event.nativeEvent.contentSize.height),
      MAX_INPUT_HEIGHT
    );
    setInputHeight(newHeight);
  };

  async function handleCreateTask(){
    await createTask({task});
    closeModal();
    const allTasks = await getTasks();
    setList(allTasks);    
  }

  return (
    <ModalMainView>
        <ModalContainer>
          <ModalHeader>
            <BoldText>Nova Tarefa</BoldText>
            <FakeButton onPress={closeModal}>
              <Close width={24} height={24} />
            </FakeButton>
          </ModalHeader>
          <RowView xSize={100}>
            <FlatListTextView xSize={77} ySize={inputHeight} maxHeight={MAX_INPUT_HEIGHT}>
              <ModalInput
                xSize={100} ySize={100}
                placeholder="Adicione uma nova tarefa"
                scrollEnabled={true}
                multiline={true}
                onContentSizeChange={handleContentSizeChange}
                textAlignVertical="top"
                textBreakStrategy="simple"
                value={task}
                onChangeText={(text: string) => setTask(text)}
                maxHeight={MAX_INPUT_HEIGHT}
              />
            </FlatListTextView>
            {task? (
            <ModalButton xSize={18} ySize={57} onPress={()=> handleCreateTask()}>
              <PlusCircle width={30} height={20} />
            </ModalButton>
            ):(
              <ModalButton xSize={18} ySize={57} bgColor="#6B6572" disabled={true}>
              <PlusCircle width={30} height={20} />
            </ModalButton>
            )}
          </RowView>
        </ModalContainer>
      </ModalMainView>
  );
}

export function ErrorModal({closeModal, persistData}:{ closeModal: () => void, persistData: () => void }) {
  return(
    <ModalMainView>
      <ErrorContainer BgColor="#D9D9D9">
        <BoldText>ERRO</BoldText>
        <ButtonText letterColor="#6B6572">Erro ao receber os dados da API</ButtonText>
        <ModalFakeButton onPress={() => persistData()}>
          <BoldText>Tentar novamente</BoldText>
        </ModalFakeButton>
      </ErrorContainer>
    </ModalMainView>
  );
}


export function MainModal({ modalVisible, closeModal, children }: { modalVisible: boolean, closeModal: () => void, children: React.ReactNode }) {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
      isVisible={modalVisible}
      onBackdropPress={closeModal}
    >
      {children}

    </Modal>
  );
}
