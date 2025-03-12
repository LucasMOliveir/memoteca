import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: "",
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.buscarPorId(id!).subscribe((pensamento => {
      console.log(pensamento);
      this.pensamento = pensamento
    }))
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }    
  }

  cancelar(){
    this.router.navigate(['/home']);
  }
}
