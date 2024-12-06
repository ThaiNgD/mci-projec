export {};

declare global {
  type IFormLogin = {
    username: string;
    password: string;
  };
  type IFormRegister = {
    username: string;
    password: string;
  };
  type IOptionSelectFormat = {
    readonly label: string;
    readonly value: string;
  };
}
