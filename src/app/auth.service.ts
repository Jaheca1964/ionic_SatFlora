import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Registro de usuario
  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Inicio de sesión
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cierre de sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Obtener el estado de autenticación
  getAuthState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}


