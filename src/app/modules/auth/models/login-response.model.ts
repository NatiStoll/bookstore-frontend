import { User } from "../../users/models/user.model";

export interface LoginResponse {
  token: string;
  user: Partial<User>
}
