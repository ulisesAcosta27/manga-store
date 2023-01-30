import { IFormRegister } from "./formRegister";

export interface IActions {
  getUser: (userValues: IFormRegister) => Promise<void>;
}