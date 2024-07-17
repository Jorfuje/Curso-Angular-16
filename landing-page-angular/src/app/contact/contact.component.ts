import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  // Formulario de tipo plantilla
  // public usuario: any = {
  //   nombre: '',
  //   email: ''
  // }
  // enviar(){
  //   console.log(this.usuario);
    
  // }

  // Formularios reactivos

  formularioContacto: FormGroup;

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.valueChanges.subscribe(valor => {
      console.log(valor);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Se destruyo el componente');
    
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }


  enviar(){
    console.log(this.formularioContacto);
  }

}
