import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from '@root/shared/interfaces/Icarousel-item.metadata';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'shared-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  host: { ngSkipHydration: 'true'}
})
export class CarouselComponent implements OnInit {

 @Input() items: ICarouselItem[] = []; // Array of data for carousel items
responsiveOptions: any[] | undefined;

  constructor(){

  }

  ngOnInit(){
    this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
  }


}
