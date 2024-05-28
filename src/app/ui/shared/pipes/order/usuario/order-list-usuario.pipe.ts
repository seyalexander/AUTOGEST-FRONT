import { Pipe, PipeTransform } from '@angular/core';
import { usuarioModel } from '../../../../../domain/models/usuario/usuario.model';

@Pipe({
    name: 'orderListUsuario',
    standalone: true
})
export class OrderListUsuarioPipe implements PipeTransform {

  transform( value: Array<any>,args: string | null = null, sort: string = 'asc'): usuarioModel[] {
    try {
      if(args == null) { return value; }
      else {
        const tmpList = value.sort(function (a, b) {
          if (a[args] < b[args]) {
            return -1;
          } else if (a[args] == b[args]) {
            return 0;
          } else if (a[args] < b[args]) {
            return 1;
          }
          return 1;
        });
        return (sort == 'asc') ? tmpList :tmpList.reverse();
      }

    } catch (e) {
      console.log('Error al filtrar');
      return value;
    }
  }

}
