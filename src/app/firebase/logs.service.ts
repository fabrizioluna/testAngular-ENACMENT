import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, CollectionReference, doc, updateDoc } from 'firebase/firestore';

interface LogObject {
  requests: [
    {
      enteredNumber: number;
      operationResult: number[];
    }
  ];
  user_name: string;
  user_id: string;
  date: string;
  time: String;
}

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private firestore: Firestore) {}

  private logs = collection(this.firestore, 'logs');

  async createLogRequest(logObject: LogObject) {
    return await addDoc(this.logs, logObject);
  }

  getGlobalLogs() {
    return collectionData(this.logs);
  }
}
