import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeaderMovilHomeComponent } from '../../../../../shared/components/organisms/header-movil-home/header-movil-home.component';
import { AsideComponent } from '../../../../../shared/layouts/aside/aside.component';
import { AuthService } from '../../../../../../infraestrcuture/driven-adapter/login/auth.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [AsideComponent, HeaderMovilHomeComponent, NgIf, RouterOutlet, RouterLink]
})
export class HomePageComponent {

  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router, private loginService: AuthService) {}

  showMenu:boolean = false;
  mostrarComponente(): void {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Dashboard',
        icon: 'uil uil-estate',
        route: ['/','home'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Conf. General'],
        icon: 'uil uil-document-info',
        opciones: [
          {
            name: ['empresa'],
            icon: 'uil uil-document-info',
            route: ['/','home','empresa']
          },
          {
            name: ['choferes'],
            icon: 'uil uil-document-info',
            route: ['/','home','choferes']
          },
          {
            name: ['Cliente'],
            icon: 'uil uil-document-info',
            route: ['/','home','MostrarCliente']
          },
        ],
      },
      {
        name: ['Conf. usuarios'],
        icon: 'uil uil-document-info',
        opciones: [

          {
            name: ['tipo documentos'],
            icon: 'uil uil-document-info',
            route: ['/','home','tipo-documentos']
          },
          {
            name: ['empleados'],
            icon: 'uil uil-document-info',
            route: ['/','home','empleados']
          },
          {
            name: ['usuarios'],
            icon: 'uil uil-document-info',
            route: ['/','home','usuarios']
          }
        ],
      },
      {
        name: ['Conf. Servicios'],
        icon: 'uil uil-document-info',
        opciones: [
          // {
          //   name: ['orden trabajo'],
          //   icon: 'uil uil-document-info',
          //   route: ['/','home','orden-trabajo']
          // },
          {
            name: ['reparacion'],
            icon: 'uil uil-document-info',
            route: ['/','home','reparacion']
          },
          {
            name: ['recepción'],
            icon: 'uil uil-document-info',
            route: ['/','home','recepcion']
          },
        ],
      },
      {
        name: ['Conf. productos'],
        icon: 'uil uil-document-info',
        opciones: [
          {
            name: ['familia productos'],
            icon: 'uil uil-document-info',
            route: ['/','home','familia-productos']
          },
          {
            name: ['productos'],
            icon: 'uil uil-document-info',
            route: ['/','home','productos']
          },
        ],
      },
      {
        name: ['Conf. autos'],
        icon: 'uil uil-document-info',
        opciones: [
          {
            name: ['marca autos'],
            icon: 'uil uil-document-info',
            route: ['/','home','marca-autos']
          },
          {
            name: ['modelo autos'],
            icon: 'uil uil-document-info',
            route: ['/','home','modelo-autos']
          },
          {
            name: ['autos'],
            icon: 'uil uil-document-info',
            route: ['/','home','autos']
          },
        ],
      },
      {
        name: ['Reportes'],
        icon: 'uil uil-document-info',
        route: ['/','home','']
      },
      // {
      //   name: ['Operaciones'],
      //   icon: 'uil uil-document-info',
      //   opciones: [
      //     {
      //       name: ['Orden de ingreso'],
      //       icon: 'uil uil-document-info',
      //       route: ['/', 'home','operacion']
      //     },
      //   ],
      // },
    ]

  }

  salir () {
    this.loginService.logout()
  }


  @Output() abrirComponenteEvent = new EventEmitter<void>();

  abrirComponente(): void {
    this.abrirComponenteEvent.emit();
  }


  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }
}
