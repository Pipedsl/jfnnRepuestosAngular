import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  items : MenuItem[] | undefined;


  ngOnInit(): void {
      this.items = [
            {
                label: 'Login',
                icon: 'pi pi-user',
                routerLink: '/auth'
            },
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/dashboard'
            }
        ]
    }

    goToSection(sectionId: string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}

