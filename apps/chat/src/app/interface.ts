export enum MessageType {
  SENT = 'Sent',
  RECEIVED = 'Received',
}

export interface Message {
  message: string;
  time: string;
  type: MessageType;
}
