import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}
  private users = collection(this.firestore, 'users');

  getListUsers() {
    return collectionData(this.users);
  }
}
