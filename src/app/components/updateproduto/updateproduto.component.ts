import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Produto } from 'src/app/Produto';

@Component({
  selector: 'app-updateproduto',
  templateUrl: './updateproduto.component.html',
  styleUrls: ['./updateproduto.component.css']
})
export class UpdateprodutoComponent implements OnInit {

  produto?: Produto
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProdutoById(id).subscribe(data => {
      this.produto = data
      console.log(this.produto)
    })
  }

  form = new FormGroup({
    produtoNome: new FormControl('', [Validators.required]),
    produtoFornecedor: new FormControl('', [Validators.required]),
    produtoValor: new FormControl('', [Validators.required]),
    usuarioId: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateProduto(this.produto?.produtoId, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['view']);
  }

}