import { Message, MessageType } from './interface';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messages: BehaviorSubject<Message[]>;

  constructor() {
    this.messages = new BehaviorSubject([
      {
        message: 'Hi, How are you..?',
        time: '7:53',
        type: MessageType.SENT,
      },
      {
        message: `I'm fine`,
        time: '7:54',
        type: MessageType.RECEIVED,
      },
      {
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        time: '7:54',
        type: MessageType.SENT,
      },
      {
        message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
        time: '7:54 PM',
        type: MessageType.RECEIVED,
      },
    ]);
  }
}
