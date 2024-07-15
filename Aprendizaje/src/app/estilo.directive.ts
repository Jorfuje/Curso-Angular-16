import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstilo]'
})
export class EstiloDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }

}
