import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { jwtDecode } from "jwt-decode";

interface Task{
  id: number,
  tarefa: string,
  status: boolean
}
interface AuthContextData {
    isAuthenticated: boolean;
    login: (credentials: { username: string; pass: string }) => Promise<boolean>;
    logout: () => void;
    getTasks: () => Promise<Task[]>;
    createTask: (tarefas: {task: string}) => void;
    deleteTask: (tarefasId: {taskId: number | null}) => void;
    editTask: (editTasks: {taskId: number | null, task: string, status: boolean}) => void;
}

interface JWTPayload {
  exp: number;  
  iat: number;     
  sub?: string;   
  username?: string; 
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthinticated] = useState(false);
  const [tokenExpired, setTokenExpired] = useState(false)

  useEffect(() =>{
    async function loadData(){
      await loadUser();
    }
    loadData();
  },[])

  async function loadUser(){
    try {
      const storedToken = await AsyncStorage.getItem("@token");
      if(storedToken){
        api.defaults.headers.common['Authorization'] = storedToken;
        // await AsyncStorage.clear();
        setIsAuthinticated(true);

      }
    } catch (error) {
      setIsAuthinticated(false);
    }
  }

  async function logout() {
    setIsAuthinticated(false);
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.clear();
    delete api.defaults.headers.common['Authorization'];
  }

  async function login({username, pass}: {username: string, pass: string}) {
    try {
      const response = await api.post("/login",{
        username: username,
        password: pass
      });
      const {accessToken } = response.data;
      const data = {accessToken};
      if (!accessToken) {
        console.error("Token não recebido do servidor");
        return false;
      }
      const bearerToken = `Bearer ${accessToken}`;
      api.defaults.headers.common['Authorization'] = bearerToken;
      setIsAuthinticated(true);
      await AsyncStorage.setItem("@token", bearerToken);
      return true
    } catch (error) {
      return false;
    }
  }

  async function getTasks(){
    try {
      const response = await api.get("/tarefas");
      return response.data;

    } catch (error) {
      console.log("Erro ao buscar tarefas:", error);
      return false;
    }
  }

  async function createTask({task}: {task: string}){
    try {
      const response = await api.post("/tarefas", {
        tarefa: task
      })
    } catch (error) {
      console.log("erro ao criar tarefa", error);
    }
  }

  async function deleteTask({taskId}: {taskId: number | null}){
    try {
      const response = await api.delete(`/tarefas/${taskId}`);
    } catch (error) {
      console.log("erro ao deletar tarefa", error);
    }
  }

  async function editTask({taskId, task, status } : {taskId: number | null, task: string, status: boolean}){
    try {
      const response = await api.put(`/tarefas/${taskId}`, {
        tarefa: task,
        status: status
      });
    } catch (error) {
      console.log("Erro ao editar tarefa", error);
    }
  }

  async function isTokenExpired(): Promise<boolean>  {
    try {
      const storedToken = await AsyncStorage.getItem("@token");
      if(storedToken){
        const decoded: JWTPayload = jwtDecode(storedToken);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        }
        return false;
      }
      else
        return false;
    } catch (error) {
      console.error("erro ao decodificar token", error);
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, logout, login, getTasks, createTask, deleteTask, editTask}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };