import { Modal, TouchableWithoutFeedback } from "react-native";
import {
  ModalContainer,
  ModalMainView,
  ModalHeader,
  FlatListTextView,
  ModalBottom,
} from "../../../Components/views";
import { BoldText, ItemText, ButtonText } from "../../../Components/texts";
import { FakeButton, Button } from "../../../Components/button";
import Close from "../../../assets/close.svg";

export function DeleteEditModal({ visible, closeModal, taskId, task }) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
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
              <Button xSize={49} ySize={54}>
                <ButtonText>Editar</ButtonText>
              </Button>
              <Button xSize={49} ySize={54}>
                <ButtonText>Remover</ButtonText>
              </Button>
            </ModalBottom>
          </ModalContainer>
        </ModalMainView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
