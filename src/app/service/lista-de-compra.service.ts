import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
    //this.atualizarLocalSotorage(); // subistituido pelo gancho DoCheck
  }

  editarItemDaLIsta(ItemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: ItemAntigo.id,
      nome: nomeEditadoDoItem,
      data: ItemAntigo.data,
      comprado: ItemAntigo.comprado,
    };
    const id = ItemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    //this.atualizarLocalSotorage();
  }
  atualizarLocalSotorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
