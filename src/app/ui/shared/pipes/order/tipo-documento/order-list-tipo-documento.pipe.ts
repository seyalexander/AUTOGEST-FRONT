import { Pipe, PipeTransform } from '@angular/core';
import { tipoDocumentosModel } from '../../../../../domain/models/tipo-documentos/tipo-documentos.model';


@Pipe({
    name: 'orderListTipoDocumento',
    standalone: true
})
export class OrderListTipoDocumentoPipe implements PipeTransform {

  transform( value: Array<any>,args: string | null = null, sort: string = 'asc'): tipoDocumentosModel[] {
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
