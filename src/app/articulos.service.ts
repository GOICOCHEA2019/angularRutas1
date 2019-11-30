import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  getArticulos(){
  	return[

  		{
  			codigo: 1,
  			descripcion: 'cuaderno a4',
  			precio: 5.90,
  			imagen: 'https://i.pravatar.cc/30'
  		},

  		{
  			codigo: 2,
  			descripcion: 'rompecabezas',
  			precio: 5.90,
  			imagen: 'https://i.pravatar.cc/40'
  		},

  		{
  			codigo: 3,
  			descripcion: 'mochila',
  			precio: 5.90,
  			imagen: 'https://i.pravatar.cc/42'
  		},

  		{
  			codigo: 4,
  			descripcion: 'plumones',
  			precio: 5.90,
  			imagen: 'https://i.pravatar.cc/35'
  		}

  	];
  }

}
