import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Platform, ActivityIndicator, StatusBar, Modal } from "react-native";
import {
  Container,
  Content,
  SafeAreaView,
  BottomView,
  SearchArea,
} from "../../Components/views";
import HomeHeader from "./components/homeHeader";
import { BottomButton, Button, FakeButton } from "../../Components/button";
import PlusCircle from "../../assets/PlusCircleRegular.svg";
import SearchContainer from "./components/searchContainer";
import { ButtonBoldText } from "../../Components/texts";
import TaskArea from "./components/taskArea";
import { MainModal, CreateTaskModal, ErrorModal } from "./components/modals";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  function handleOpenCreateTaskModal() {
    setOpenCreateTaskModal((prev: boolean) => !prev);
  }

  const list = [
    {
      id: 1,
      task: "Arrumar a casa é uma tarefa constante, mas essencial para manter o ambiente organizado e confortável.",
      done: true,
    },
    {
      id: 2,
      task: "Preparar o café da manhã com calma é uma forma simples de começar o dia com energia e disposição.",
      done: false,
    },
    {
      id: 3,
      task: "Fazer compras no supermercado exige planejamento para evitar esquecer itens importantes da lista.",
      done: true,
    },
    {
      id: 4,
      task: "Aproveitar o tempo livre para ler um livro é uma excelente maneira de relaxar e aprender algo novo.",
      done: false,
    },
    {
      id: 5,
      task: "Limpar a cozinha após o almoço torna o espaço mais agradável e facilita na hora de preparar a próxima refeição.",
      done: false,
    },
    {
      id: 6,
      task: "Responder aos e-mails de trabalho com atenção ajuda a manter a comunicação fluida e as tarefas em dia.",
      done: true,
    },
    {
      id: 7,
      task: "Organizar a agenda da semana é um passo importante para garantir que tudo seja feito de maneira eficiente.",
      done: false,
    },
  ];
  const sortedList = [...list].sort((a, b) => {
    if (a.done === b.done) return 0;
    return a.done ? 1 : -1;
  });

  const filteredTasks = sortedList
    .filter((item) => {
      if (filter === "done") return item.done;
      if (filter === "created") return !item.done;
      return true;
    })
    .filter((item) =>
      item.task.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <SafeAreaView>
      <Content behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
        <StatusBar barStyle="light-content" />
        <HomeHeader />
        <SearchContainer
          setSearchText={setSearchText}
        />
        <TaskArea
          setFilter={setFilter}
          filteredTasks={filteredTasks}
          fullTasks={list}
        />

        <BottomView>
          <BottomButton xSize={30} ySize={52} onPress={()=> handleOpenCreateTaskModal()}>
            <ButtonBoldText>Criar</ButtonBoldText>
            <PlusCircle width={20} height={20} />
          </BottomButton>
        </BottomView>
      </Content>
      <MainModal
        modalVisible={openCreateTaskModal}
        closeModal={() => setOpenCreateTaskModal((prev: boolean) => !prev)}
        children={
          <CreateTaskModal
            closeModal={() => setOpenCreateTaskModal((prev: boolean) => !prev)}
          />
        }
        />
      <MainModal
       modalVisible={openErrorModal}
       closeModal={() => setOpenErrorModal((prev: boolean) => !prev)} 
       children={
        <ErrorModal
          closeModal={() => setOpenErrorModal((prev: boolean) => !prev)} 
        />
       }
      />  
    </SafeAreaView>
  );
}
