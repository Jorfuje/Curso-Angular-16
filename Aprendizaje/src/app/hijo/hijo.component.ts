import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // @Input() recibirMensaje: string = '';

  @Output() enviarMensaje = new EventEmitter<string>();

  mensajeEnviado : string = '';

  enviar(){
    this.enviarMensaje.emit(this.mensajeEnviado);
  }

}
