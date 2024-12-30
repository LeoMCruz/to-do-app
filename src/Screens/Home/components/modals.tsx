import React, { useState } from "react";
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
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MAX_INPUT_HEIGHT = SCREEN_HEIGHT * 0.25;

export function DeleteEditModal({ closeModal, taskId, task, openEdit }: { closeModal: () => void, taskId: number | null, task: string, openEdit: () => void }) {

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
              <Button xSize={49} ySize={53}>
                <ButtonText>Remover</ButtonText>
              </Button>
            </ModalBottom>
          </ModalContainer>
        </ModalMainView>
  );
}

export function EditModal({ closeModal, taskId, task }: { closeModal: () => void, taskId: number | null, task: string }) {
  const [editedTask, setEditedTask] = useState("");
  const [inputHeight, setInputHeight] = useState(61);

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
                defaultValue={task}
                onChangeText={(text: string) => setEditedTask(text)}
                maxHeight={MAX_INPUT_HEIGHT}
              />
            </FlatListTextView>
            <ModalButton xSize={18} ySize={57}>
              <PlusCircle width={30} height={20} />
            </ModalButton>
          </RowView>
        </ModalContainer>
      </ModalMainView>
  );
}

export function CreateTaskModal({closeModal}: {closeModal: () => void}){
  const [inputHeight, setInputHeight] = useState(0);
  const [task, setTask] = useState("");

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
            <ModalButton xSize={18} ySize={57}>
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

export function ErrorModal({closeModal}:{ closeModal: () => void }) {
  return(
    <ModalMainView>
      <ErrorContainer BgColor="#D9D9D9">
        <BoldText>ERRO</BoldText>
        <ButtonText letterColor="#6B6572">Erro ao receber os dados da API</ButtonText>
        <ModalFakeButton>
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
