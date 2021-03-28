import { Component, ViewChild } from '@angular/core';
import { Message, MessageType } from './interface';

import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'ng-chat-over-public-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;

  messages: BehaviorSubject<Message[]>;

  message: string;

  constructor(private dataService: DataService) {
    this.messages = this.dataService.messages;
  }

  onClickSend() {
    if (!this.message) return;
    this.addMessage({
      message: this.message,
      time: this.getTime(),
      type: MessageType.SENT,
    });
    this.message = '';
    this.scrollToBottom();
    this.sendIncomingMessage();
  }

  getTime(): string {
    const hrs = new Date().getHours().toString();
    const mins = new Date().getMinutes().toString();

    return hrs + ':' + mins;
  }

  sendIncomingMessage() {
    setTimeout(() => {
      this.addMessage({
        message: `Sample reply message. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.`,
        time: this.getTime(),
        type: MessageType.RECEIVED,
      });
      this.scrollToBottom();
    }, 350);
  }

  scrollToBottom() {
    const scrollElement = document.getElementById('container');
    this.perfectScroll.directiveRef.update();
    this.perfectScroll.directiveRef.scrollToTop(
      scrollElement.scrollHeight,
      0.1
    );
  }

  addMessage(message: Message) {
    this.dataService.messages.next([
      ...this.dataService.messages.value,
      message,
    ]);
  }
}
