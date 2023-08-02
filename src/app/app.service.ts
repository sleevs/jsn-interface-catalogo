import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Produto } from './Produto';
import { Usuario } from './Usuario';
import {LoginRequest} from './LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8083/";

  constructor(private http: HttpClient) { }



  login(loginrequest?: LoginRequest ){
    return this.http.post<Usuario>(`${this.url}login/logar`, loginrequest)
  }


  addUsuario(usuario: Usuario){
    return this.http.post<Usuario>(`${this.url}usuario/criar`, usuario)
  }

  getUsuarios(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'usuario/listar')
  }

  getUsuarioById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}usuario/buscar/${id}`)
  }

  updateUsuario(id?: number ,usuario?: any): Observable<any>{
    return this.http.put<any>(`${this.url}usuario/atualizar/${id}`, usuario)
  }

  deleteUsuario(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}usuario/deletar/${id}`)
  }




  addProduto(produto: Produto){
    return this.http.post<Produto>(`${this.url}produto/criar`, produto)
  }

  getProdutos(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'produto/listar')
  }

  getProdutoById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.url}produto/buscar/${id}`)
  }

  updateProduto(id?: number ,produto?: any): Observable<any>{
    return this.http.put<any>(`${this.url}produto/atualizar/${id}`, produto)
  }

  deleteProduto(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}produto/deletar/${id}`)
  }

}