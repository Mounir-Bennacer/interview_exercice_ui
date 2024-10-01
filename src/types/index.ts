export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  text: string;
  sender: User;
  tags: string[];
}
