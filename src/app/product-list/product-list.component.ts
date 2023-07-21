import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'a01-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = "Mi lista de productos";

  headers = { image: "Imagen", desc: 'Producto', price: 'Precio', avail: 'Disponible' };

  showImage = true;

  filterSearch = ''; // Por defecto cadena vacía.

  products: IProduct[] = [{
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  }, {
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
  }];

  toggleImage() {
    this.showImage = ! this.showImage;
  }

}
