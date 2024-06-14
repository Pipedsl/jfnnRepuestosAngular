import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { CarouselComponent } from '@root/shared/components/carousel/carousel.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routesDashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'inicio', component: CarouselComponent},
      {path: 'cotizar', component: CotizacionComponent},
      {path: 'contacto', component: ContactoComponent},
    ],
  }
];
