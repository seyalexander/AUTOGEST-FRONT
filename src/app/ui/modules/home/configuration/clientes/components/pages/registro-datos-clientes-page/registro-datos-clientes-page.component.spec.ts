import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosClientesPageComponent } from './RegistroDatosClientesPageComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { clientesGateway } from 'src/app/domain/models/clientes/gateway/clientes-gateway';
import { ClientesApiService } from 'src/app/infraestrcuture/driven-adapter/clientes/clientes-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroDatosClientesPageComponent', () => {
  let component: RegistroDatosClientesPageComponent;
  let fixture: ComponentFixture<RegistroDatosClientesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientTestingModule, ReactiveFormsModule, RegistroDatosClientesPageComponent],
    providers: [
        { provide: clientesGateway, useClass: ClientesApiService },
    ]
});
    fixture = TestBed.createComponent(RegistroDatosClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
