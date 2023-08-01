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
  dataId: any
  dataEmail: any
  dataNome: any
  loginRequest: any | undefined
  url: string = "http://localhost:8083/";
  

  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) {

    this.dataEmail ;
    this.dataId ;
    this.dataNome ;
   }

  
    ngOnInit(): void {
      this.dataId = this.route.snapshot.params['usuarioId'];
      this.dataEmail = this.route.snapshot.params['usuarioEmail'];
     this.dataNome = this.route.snapshot.params['usuarioNome'];
 
     
   

    }
  

  
  }