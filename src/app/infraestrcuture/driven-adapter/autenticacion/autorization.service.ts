import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor() {}

  hasPermission(permission: string): boolean {
    // Lógica para verificar los permisos del usuario
    // Devuelve true si el usuario tiene el permiso, de lo contrario, false
    return true; // Por ejemplo, para simplificar, siempre devuelve true
  }
}
