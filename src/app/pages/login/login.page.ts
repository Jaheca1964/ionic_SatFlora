import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = "";
  contrasena: string = "";

  constructor(private alertController: AlertController) {}

  validar() {
    // Aquí puedes agregar la lógica de validación del usuario y contraseña
    if (this.usuario === 'admin' && this.contrasena === '123456') {
      this.mostrarAlerta('Inicio de sesión exitoso');
    } else {
      this.mostrarAlerta('Usuario o contraseña incorrectos');
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
