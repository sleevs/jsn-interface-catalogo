import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
  
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    usuarioNome: new FormControl('', [Validators.required]),
    usuarioEmail: new FormControl('', [Validators.required]),
    usuarioSenha: new FormControl('', [Validators.required])

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addUsuario(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}