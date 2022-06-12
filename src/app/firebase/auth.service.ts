import { Injectable } from '@angular/core';
import { doc, Firestore, query, where } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firestore: Firestore) {}

  private auth = collection(this.firestore, 'users');

  loginUser(username: string, password: string): Promise<{ user: string; idUser: string; error: string }> {
    const q = query(this.auth, where('username', '==', username));

    const userData = getDocs(q).then(async ({ docs }) => {
      // Si el user ya esta registrado entonces compara las passwords

      if (docs.length >= 1) {
        const passwordUser = (await getDoc(doc(this.auth, docs[0].id))).get('password');
        if (passwordUser !== password) {
          // Si no coinciden las passwords retorna el error.
          return { user: '', idUser: '', error: 'La contraseña no es válida.' };
        }
      }

      // Si no está en la db... entonces lo crea.
      const createUser = await addDoc(this.auth, { username, password });

      return { user: username, idUser: createUser.id, error: '' };
    });
    return userData;
  }
}
