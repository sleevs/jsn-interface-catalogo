import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})
export class AddprodutoComponent implements OnInit {
  
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    produtoNome: new FormControl('', [Validators.required]),
    produtoFornecedor: new FormControl('', [Validators.required]),
    produtoValor: new FormControl('', [Validators.required]),
    usuarioId: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addProduto(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['view']);
  }
}