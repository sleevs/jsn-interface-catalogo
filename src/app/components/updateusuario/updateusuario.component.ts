import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-updateusuario',
  templateUrl: './updateusuario.component.html',
  styleUrls: ['./updateusuario.component.css']
})
export class UpdateusuarioComponent implements OnInit {

  usuario?: Usuario
  data: any
  usuarioNome : any
  usuarioEmail : any
  usuarioId : any
  usuarioSenha : any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { 

    this.usuarioNome ;
    this.usuarioEmail ;
    this.usuarioId ;
    this.usuarioSenha ;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUsuarioById(id).subscribe(data => {
      this.usuario = data

      this.usuarioNome = data.usuarioNome;
      this.usuarioEmail = data.usuarioEmail;
      this.usuarioId = data.usuarioId;
      this.usuarioSenha = this.usuario.usuarioSenha ;
      console.log(this.usuario)
    })
  }

  form = new FormGroup({
  
    usuarioNome: new FormControl('', [Validators.required]),
    usuarioEmail: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateUsuario(this.usuario?.usuarioId, this.data).subscribe(data => {
      data.usuarioSenha = this.usuarioSenha ;
      console.log(data)
    })

    this.router.navigate(['view']);
  }

}