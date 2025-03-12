import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {
  
  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  pensamento: Pensamento = {
    id: "",
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  editarPensamento(): void{
    this.service.editar(this.pensamento).subscribe(() =>{
      this.router.navigate(["/home"]);
    })
  }

  cancelar(): void{
    this.router.navigate(["/listarPensamento"])
  }
}