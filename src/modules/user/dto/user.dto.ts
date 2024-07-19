export type CreateUserDTO = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type UsernameAndEmail = {
  email: string;
  username: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;
