import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewproduto',
  templateUrl: './viewproduto.component.html',
  styleUrls: ['./viewproduto.component.css']
})
export class ViewprodutoComponent implements OnInit {

  produtos: any[] | undefined
    url: string = "http://localhost:8083/";
  
    constructor(private service: AppService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getProdutos().subscribe(data => {
        this.produtos = data;
      })
    }
  
    deleteProduto(id: number){
      this.service.deleteProduto(id).subscribe(data => {
        this.produtos = this.produtos?.filter(produto => produto.produtoId !== id);
      })
      
        setTimeout(()=>{
          window.location.reload();
        }, 100);
    
    }
  
    updateProduto(id: number){
      this.router.navigate(['update', id]);
    }
  
  }