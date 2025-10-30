export interface Comment {
  id: string;
  content: string;
  parent: string | null;
  user: string;
  path: string;
  timeStamp: Date | string;
  email: string;
}
