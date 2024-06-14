import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
  ],
  templateUrl: './toolbar.component.html',
  styles: `
  `
})
export class ToolbarComponent implements OnInit{



  constructor(private router: Router) { }
  ngOnInit(): void {}

  goToSection(sectionId: string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


}
