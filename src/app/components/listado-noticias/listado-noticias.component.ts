import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
  @Input() listNoticias: any;
  mostrar(){
    console.log(this.listNoticias);
  }
}
