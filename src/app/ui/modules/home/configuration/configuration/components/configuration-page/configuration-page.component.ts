import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderConfigurationComponent } from '../../../../../../shared/components/organisms/header-configuration/header-configuration.component';

@Component({
    selector: 'app-configuration-page',
    templateUrl: './configuration-page.component.html',
    styleUrls: ['./configuration-page.component.css'],
    standalone: true,
    imports: [HeaderConfigurationComponent, RouterOutlet]
})
export class ConfigurationPageComponent {

}
