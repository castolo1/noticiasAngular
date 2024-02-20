import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  categorias: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},
  ]

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'},
    { value: 'fr', nombre: 'Francia'},
    { value: 'hu', nombre: 'Hungria'},
    { value: 'mx', nombre: 'Mexico'},
    { value: 'gb', nombre: 'Reino Unido'},
    { value: 'us', nombre: 'Estados Unidos'},
  ]

  buscarNoticia() {
    const PARAMENTROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMENTROS);
  }
}
