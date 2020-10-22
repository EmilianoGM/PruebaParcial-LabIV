import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

interface Pokemon{
  name: string,
  url: string
}

interface Pokemones{
  count: number,
  next: string,
  previous: string,
  results: any[]
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  listaPokemones:Pokemon[];
  pokemones: Pokemones

  constructor(
    private httpService: HttpService
  ) {
    this.listaPokemones = [];
    this.getPokemones();
    //this.getListado();
  }

  getPokemones(){
   this.httpService.get("https://pokeapi.co/api/v2/pokemon/").subscribe((pokemones) => {
     this.pokemones = pokemones;
    console.log("POKEMONES", this.pokemones);
    this.getListado();
    /*pokemones.forEach(pokemon => {
        this.listaPokemones.push({
          name: pokemon.name,
          url: pokemon.url
        })
      });*/
    });
  }

  getListado(){
    this.pokemones.results.forEach(pokemon => {
      this.listaPokemones.push({
        name: pokemon.name,
        url: pokemon.url
      });
    });
    console.log("listadoPokemons", this.listaPokemones);
  }

  mostrar(){
    console.log("nada");
  }
}
