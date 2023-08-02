import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import{Usuario} from 'src/app/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service: AppService, private router: Router) { }
   data : any

  
  form = new FormGroup({
    loginRequestEmail: new FormControl('', [Validators.required]),
    loginRequestSenha: new FormControl('', [Validators.required])

  })

  ngOnInit(): void {
  }

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.login(this.data).subscribe(data => {

           console.log(data);
           let id = data.usuarioId ;     
      this.router.navigate(['perfil' , id]); 
    })
   
  }
}