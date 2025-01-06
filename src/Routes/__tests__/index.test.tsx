import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import StackRoutes from "../index";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "../../Context/auth";

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

jest.mock('../../Screens/SignIn', () => {
    const { SafeAreaView, TextInput } = require('react-native');
    const SignIn = () => {
      return (
        <SafeAreaView testID="signIn">
          <TextInput
            placeholder="Username:"
            xSize={100}
            ySize={52}
          />
          <TextInput
            placeholder="Senha"
            xSize={82}
            ySize={52}
          />
        </SafeAreaView>
      );
    };
    return SignIn; 
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({ name, component: Component }: { name: string, component: any }) => <Component />,
    }),
  };
});

jest.mock('../../Screens/Home', () => {
    const { SafeAreaView } = require('react-native');
    const Home = () => <SafeAreaView testID="home-screen" />;
    return Home; 
});

jest.mock("@react-native-async-storage/async-storage", () => {
    const mockAsyncStorage = require("@react-native-async-storage/async-storage/jest/async-storage-mock");
    return mockAsyncStorage;
});

describe("Auth Routes", () => {
    const renderRoutes = (isAuthenticated: boolean = false) => {
        const mockAuthContext = {
            login: jest.fn(),
            isAuthenticated: isAuthenticated,
            logout: jest.fn(),
            getTasks: jest.fn()
        };
        
        return render(
            <NavigationContainer>
                <AuthContext.Provider value={mockAuthContext}>
                  <StackRoutes />
                </AuthContext.Provider>
            </NavigationContainer>
            );
        };
          
        afterEach(() => {
            jest.clearAllMocks();
        });

    it("should be redirect to signIn page if not authenticated", () => {
      const { getByTestId } = renderRoutes(false);
      expect(() => getByTestId("home-screen")).toThrow();
      expect(getByTestId("signIn")).toBeTruthy();
        
    })
    
    it("should be redirect to Home page if authenticated", () => {
      const { getByTestId } = renderRoutes(true);
      expect(() => getByTestId("signIn")).toThrow();
      expect(getByTestId("home-screen")).toBeTruthy();       
    })
})