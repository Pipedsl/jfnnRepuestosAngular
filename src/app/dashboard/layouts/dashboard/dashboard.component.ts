import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactoComponent } from '@root/dashboard/components/contacto/contacto.component';
import { CotizacionComponent } from '@root/dashboard/components/cotizacion/cotizacion.component';
import { AboutUsComponent } from '@root/dashboard/pages/about-us/about-us.component';
import { MarcasComponent } from '@root/dashboard/pages/marcas/marcas.component';
import { CarouselComponent } from '@root/shared/components/carousel/carousel.component';
import { FooterComponent } from '@root/shared/components/footer/footer.component';
import { ToolbarComponent } from '@root/shared/components/toolbar/toolbar.component';
import { CAROUSEL_DATA_ITEMS } from '@root/shared/constants/carousel.const';
import { ICarouselItem } from '@root/shared/interfaces/Icarousel-item.metadata';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    AboutUsComponent,
    ToolbarComponent,
    CarouselComponent,
    CotizacionComponent,
    ContactoComponent,
    FooterComponent,
    MarcasComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {



  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;


  constructor(private router: Router) {}

}
