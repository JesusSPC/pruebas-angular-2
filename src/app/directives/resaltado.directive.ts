import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  @Input("appResaltado") nuevoColor:string;


  // 1. En el constructor podemos recoger el elemento html entero con ElementRef y darle propiedades
  constructor( private el:ElementRef ) { 
    console.log("Directiva llamada")
    // el.nativeElement.style.backgroundColor = "orange";
  }
  
  // 2.
  // Eventos de escucha
  @HostListener('mouseenter') mouseDentro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mouseFuera(){
    this.resaltar(null);
  }

  // Método privado
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
