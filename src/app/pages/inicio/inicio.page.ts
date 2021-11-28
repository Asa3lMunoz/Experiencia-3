import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
 icon: string;
 name: string;
 redirecTo:string;
} 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'arrow-up',
      name:'Gorros',
      redirecTo:'/gorros'

    },
    {
      icon:'shirt',
      name:'Superior',
      redirecTo:'/superior'

    },
    {
      icon:'arrow-down',
      name:'Inferior',
      redirecTo:'/inferior'

    },
    {
      icon:'footsteps',
      name:'Zapatillas',
      redirecTo:'/zapatillas'

    },
    {
      icon:'tv',
      name:'Noticias',
      redirecTo:'/noticias'

    },
  ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,
    // autoplay:true,
  }
}
