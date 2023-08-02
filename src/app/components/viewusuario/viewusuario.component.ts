import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import {LoginRequest} from 'src/app/LoginRequest';
import {Usuario} from 'src/app/Usuario';


@Component({
  selector: 'app-viewusuario',
  templateUrl: './viewusuario.component.html',
  styleUrls: ['./viewusuario.component.css']
})
export class ViewusuarioComponent implements OnInit {


  usuario?: Usuario
  usuarioNome : any
  usuarioEmail : any
  usuarioId : any
  loginRequest: any | undefined
  usuarios: any[] | undefined
    url: string = "http://localhost:8083/";
  

  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) {

    this.usuarioNome ;
    this.usuarioEmail ;
    this.usuarioId ;
   }

  
    ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
      this.service.getUsuarioById(id).subscribe(data => {
        this.usuario = data

     this.usuarioNome = data.usuarioNome;
    this.usuarioEmail = data.usuarioEmail;
    this.usuarioId = data.usuarioId;
        console.log(this.usuario)
   

      })
 
     
    }
    deleteUsuario(id: number){
      this.service.deleteUsuario(id).subscribe(data => {
        this.usuarios = this.usuarios?.filter(usuario => usuario.usuarioId !== id);
      })
      
        setTimeout(()=>{
          window.location.reload();
        }, 100);
    
    }
  
    updateUsuario(id: number){
      this.router.navigate(['updatePerfil', id]);
    }
  
  }