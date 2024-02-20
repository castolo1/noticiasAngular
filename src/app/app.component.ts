import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NoticiaService } from './services/noticia.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    SpinnerComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noticiasAngular';
  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];
    
    setTimeout(() =>{
      this._noticiaService.getNoticias(parametros).subscribe(data =>{
        this.loading = false;
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000)
  }
}
