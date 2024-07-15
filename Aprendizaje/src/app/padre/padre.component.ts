import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  // enviarMsj : string = 'Soy el padre';

  constructor(private _srvicio: ServicioService){}

  padre: string = '';

  ngOnInit(): void {
    this.padre = this._srvicio.padre;
  }

  saludar(){
    this._srvicio.saludar();
  }

  mensajeRecibido : string = '';

  recibir($mensaje: string){
    this.mensajeRecibido = $mensaje;
  }

}
