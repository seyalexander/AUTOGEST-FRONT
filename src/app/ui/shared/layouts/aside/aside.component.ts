import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonTextIconSidebarComponent } from '../../components/atoms/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css'],
    standalone: true,
    imports: [NgFor, ButtonTextIconSidebarComponent, RouterLink]
})
export class AsideComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

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
        name: ['Configuración'],
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
            name: ['MostrarCliente'],
            icon: 'uil uil-document-info',
            route: ['/','home','MostrarCliente']
          },
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
            name: ['orden trabajo'],
            icon: 'uil uil-document-info',
            route: ['/','home','orden-trabajo']
          },
          {
            name: ['reparacion'],
            icon: 'uil uil-document-info',
            route: ['/','home','reparacion']
          },
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
          {
            name: ['usuarios'],
            icon: 'uil uil-document-info',
            route: ['/','home','usuarios']
          }
        ]
      },
      {
        name: ['Reportes'],
        icon: 'uil uil-document-info',
        route: ['/','home','']
      },
      {
        name: ['Operaciones'],
        icon: 'uil uil-document-info',
        route: ['/', 'home','operacion']
      },
    ]
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
