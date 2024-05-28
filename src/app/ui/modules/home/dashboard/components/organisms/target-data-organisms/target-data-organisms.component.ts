import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-target-data-organisms',
    templateUrl: './target-data-organisms.component.html',
    styleUrls: ['./target-data-organisms.component.css'],
    standalone: true
})
export class TargetDataOrganismsComponent {
  @Input() titleTarget: String = '';
  @Input() cantidadTarget: String = '';
  @Input() iconoTarget: String = '';
  @Input() mode: 'principal-1' | 'principal-2' | 'principal-3' | 'principal-4' = 'principal-1';
}
