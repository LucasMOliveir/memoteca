import { Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {
        path: "",
        component: ListarPensamentoComponent,
        title: "Lista de pensamentos"        
    },
    {
        path: "home",
        component: ListarPensamentoComponent,
        title: "Lista de pensamentos"        
    },
    {
        path: "criarPensamento",
        component: CriarPensamentoComponent,
        title: "Criar pensamentos"
    },
    {
        path: "pensamentos/excluirPensamento/:id",
        component: ExcluirPensamentoComponent,
        title: "Exclui pensamento"
    },
    {
        path: "pensamentos/editarPensamento/:id",
        component: EditarPensamentoComponent,
        title: "Edita pensamento"
    }
];
