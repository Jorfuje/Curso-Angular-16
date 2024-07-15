import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  padre : string = 'Padre';
  hijo : string = 'Hijo';

  saludar(){
    console.log('Hola estimado usuario');
  }
}
