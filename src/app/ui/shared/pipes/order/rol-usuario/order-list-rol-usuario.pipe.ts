import { Pipe, PipeTransform } from '@angular/core';
import { rolUsuarioModel } from '../../../../../domain/models/rol-usuario/rol-usaurio.model';

;

@Pipe({
    name: 'orderListRolUsuario',
    standalone: true
})
export class OrderListRolUsuarioPipe implements PipeTransform {

  transform( value: Array<any>,args: string | null = null, sort: string = 'asc'): rolUsuarioModel[] {
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
      return value;
    }
  }

}
