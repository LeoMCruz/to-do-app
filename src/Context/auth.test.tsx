import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./auth";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock('../services/api', () => ({
    defaults: {
      headers: {
        common: {},
      },
    },
    post: jest.fn(),
    get: jest.fn(),
    delete: jest.fn(),
    put: jest.fn(),
  }));

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  }));

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
);  

describe("Auth context tests", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("isAuthenticated should inicialize false", () => {
        const {result} = renderHook(() => React.useContext(AuthContext), {
            wrapper
          });

        expect(result.current.isAuthenticated).toBe(false);
    })
})

describe("Login tests", () => {
    it("should authenticate if login and password are correctly", async () =>{
      const mockToken = 'fake-token';

      (api.post as jest.Mock).mockResolvedValueOnce({
        data: { accessToken: mockToken },
      });

      const { result } = renderHook(() => React.useContext(AuthContext), {
        wrapper
      });

      await act(async () => {
        await result.current.login({
          username: 'admin',
          pass: 'password'
        });
      });
      await waitFor(() => {
        expect(result.current.isAuthenticated).toBe(true);
      })
      
      expect(api.defaults.headers.common['Authorization']).toBe(`Bearer ${mockToken}`);
      
      
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('@token', `Bearer ${mockToken}`);
    })


    it('should not authenticate if login and password are wrong', async () => {
      (api.post as jest.Mock).mockRejectedValueOnce(new Error('Invalid login or password'));

      const { result } = renderHook(() => React.useContext(AuthContext), {
        wrapper
      });

      await act(async () => {
        const success = await result.current.login({
          username: 'wronglogin',
          pass: 'wrongpassword'
        });
        expect(success).toBe(false);
      });

      expect(result.current.isAuthenticated).toBe(false);
    });
})

describe('Logout tests', () => {
  it('should logout and clean asyncstorage', async () => {
    const { result } = renderHook(() => React.useContext(AuthContext), {
      wrapper
    });

    await act(async () => {
      await result.current.logout();
      expect(result.current.isAuthenticated).toBe(false);
    });
    

    expect(AsyncStorage.clear).toHaveBeenCalled();
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('@token');
    expect(api.defaults.headers.common['Authorization']).toBeUndefined();
  });
});

describe('Get tasks tests', () =>{
  it('should return a task list', async () => {
    const mockTasks = [
      {id: 1, tarefa: "testar se os testes estão funcionando", status: false},
      {id: 2, tarefa: "codar os testes", status: true}
    ];

    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockTasks });

    const { result } = renderHook(() => React.useContext(AuthContext), {
      wrapper
    });

    const tasks = await result.current.getTasks();
    expect(tasks).toEqual(mockTasks);
  })

  it('should return error or false', async () => {
    (api.get as jest.Mock).mockRejectedValueOnce(new Error('Something get wrong'));

    const { result } = renderHook(() => React.useContext(AuthContext), {
      wrapper
    });

    const tasks = await result.current.getTasks();
    expect(tasks).toBe(false);
  })
})

describe('deleteTask', () => {
  it('should delete a task', async () => {
    const taskId = 1;
    const { result } = renderHook(() => React.useContext(AuthContext), {
      wrapper
    });

    await result.current.deleteTask({ taskId });

    expect(api.delete).toHaveBeenCalledWith(`/tarefas/${taskId}`);
  });
});