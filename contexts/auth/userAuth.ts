import { dbAuthUser } from '@/api';
import { IActions, IFormRegister, IState } from '@/interfaces'
import { create } from 'zustand'

export const useContextAuth = create<IState & IActions>((set) => ({
  user: "",
  isAuth: false,
  token: "",
  getUser: async (userValues: IFormRegister) => {
    try {
      const { data } = await dbAuthUser.post("/auth/signup", userValues);
      return set((state) => ({
        ...state,
        token: data.token
      }))
    } catch (error) {
      console.log(error)
    }  
  },
}));