import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    isAuthenticated: boolean;
    login: (credentials: { username: string; pass: string }) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthinticated] = useState(false);
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("password");

  useEffect(() =>{
    async function loadData(){
      await loadUser();
    }
    loadData();
  },[])

  async function loadUser(){
    try {
      const storedUser = await AsyncStorage.getItem("@finUser");
      if(storedUser)
        setIsAuthinticated(true);
    } catch (error) {
      
    }
  }

  async function logout() {
    setIsAuthinticated((prev) => !prev);
    await AsyncStorage.removeItem("@finUser");
  }

  async function login({username, pass}: {username: string, pass: string}) {
    try {
      if(username === user && pass === password){
        setIsAuthinticated(true);
        await AsyncStorage.setItem("@finUser", JSON.stringify(user))
        return true
      }
      else
        return false;
    } catch (error) {
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, logout, login}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };