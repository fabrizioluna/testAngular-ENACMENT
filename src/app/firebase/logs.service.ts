import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

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
}

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private firestore: Firestore) {}

  private logs = collection(this.firestore, 'logs');

  insertLog() {
    return addDoc(this.logs, []);
  }

  async createLogRequest(userId: string, logObject: LogObject) {
    // const logsUpdate = doc(this.firestore, 'logs', userId);
    // const log = await updateDoc(logsUpdate, { logObject });
    const log = await addDoc(this.logs, logObject);
    console.log(log);
  }

  getGlobalLogs() {
    return collectionData(this.logs);
  }
}
