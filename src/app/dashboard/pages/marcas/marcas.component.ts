import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from '@root/shared/components/carousel/carousel.component';
import { CAROUSEL_DATA_ITEMS } from '@root/shared/constants/carousel.const';
import { ICarouselItem } from '@root/shared/interfaces/Icarousel-item.metadata';

@Component({
  selector: 'dashboard-marcas',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {
  public carouselMarcasData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor( private router: Router ){

  }
}
