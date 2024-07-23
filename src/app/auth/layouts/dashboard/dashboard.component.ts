import { Component } from '@angular/core';
import { LoginComponent } from '@root/auth/pages/login/login.component';
import { FooterComponent } from '@root/shared/components/footer/footer.component';
import { ToolbarComponent } from '@root/shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToolbarComponent,FooterComponent,LoginComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
