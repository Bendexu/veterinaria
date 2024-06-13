import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';;
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,ReactiveFormsModule]
})
export class AppComponent {
  title = 'veterinaria';
}
