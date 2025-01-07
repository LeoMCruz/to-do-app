import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../../Context/auth";
import SignIn from "../index";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    xSize: number;
    ySize: number;
}

jest.mock('@expo-google-fonts/inter', () => ({
    useFonts: () => [true],
    Inter_100Thin: '',
    Inter_200ExtraLight: '',
    Inter_300Light: '',
    Inter_400Regular: '',
    Inter_500Medium: '',
    Inter_600SemiBold: '',
    Inter_700Bold: '',
    Inter_800ExtraBold: '',
    Inter_900Black: '',
  }));

jest.mock("../../../assets/Logo.svg", () => "Logo");
jest.mock("../../../assets/eye.svg", () => "Eye");
jest.mock("../../../assets/eye-off.svg", () => "EyeOff");


jest.mock("../../../Components/views", () => ({
    Container: "Container",
    Content: "Content",
    LogoView: "LogoView",
    GeneralView: "GeneralView",
    RowView: "RowView",
    SafeAreaView: "SafeAreaView",
  }));
  



jest.mock("@react-native-async-storage/async-storage", () => {
    const mockAsyncStorage = require("@react-native-async-storage/async-storage/jest/async-storage-mock");
    return mockAsyncStorage;
  });

describe("Login Screen", () => {
    const mockLogin = jest.fn();

    const renderSignIn = () => {
        const mockAuthContext = {
          login: mockLogin,
          isAuthenticated: false,
          logout: jest.fn(),
          getTasks: jest.fn(),
          createTask: jest.fn(),
          deleteTask: jest.fn(),
          editTask: jest.fn()
        };
    
        return render(
          <NavigationContainer>
            <AuthContext.Provider value={mockAuthContext}>
              <SignIn />
            </AuthContext.Provider>
          </NavigationContainer>
        );
      };
    

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render login screen correctly", () => {
      const { getByPlaceholderText, debug } = renderSignIn();
      expect(getByPlaceholderText("Username:")).toBeTruthy();
      expect(getByPlaceholderText("Senha")).toBeTruthy();
    });

    it("should change input text when user type ", () => {
        const { getByPlaceholderText, debug } = renderSignIn();
        
        fireEvent.changeText(getByPlaceholderText("Username:"), "admin");
        fireEvent.changeText(getByPlaceholderText("Senha"), "password");

        expect(getByPlaceholderText("Username:").props.value).toBe("admin");
        expect(getByPlaceholderText("Senha").props.value).toBe("password");
    });

    it("should call login function when button is pressed", async () => {
        const { getByPlaceholderText, getByTestId, debug } = renderSignIn();

        fireEvent.changeText(getByPlaceholderText("Username:"), "admin");
        fireEvent.changeText(getByPlaceholderText("Senha"), "password");

        fireEvent.press(getByTestId("loginButton"));

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith({
                username: "admin",
                pass: "password"
            });
        });
    });

    it("should hide/show password when button is pressed", () =>{
      const { getByTestId, getByPlaceholderText} = renderSignIn();

      fireEvent.changeText(getByPlaceholderText("Senha"), "password");
      expect(getByPlaceholderText("Senha").props.secureTextEntry).toBe(true);

      fireEvent.press(getByTestId("handle-secureTextEntry"));
      expect(getByPlaceholderText("Senha").props.secureTextEntry).toBe(false);

    })
})