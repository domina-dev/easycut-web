import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Agendamento } from 'src/app/core/model/agendamento';

@Component({
	selector: 'vex-lista-agendamentos',
	templateUrl: './lista-agendamentos.component.html',
	styleUrls: ['./lista-agendamentos.component.scss']
})
export class ListaAgendamentosComponent implements AfterViewInit {

	@Input() agendamentoHoje: number;
	@Input() listaAgendamentos: Agendamento[];
	@Input() dataSource: MatTableDataSource<Agendamento>;
	@Input() displayedColumns: string[];
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	@Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
	@Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
	@Output() eventModalEditarStatus: EventEmitter<any> = new EventEmitter();

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	abrirModalCadastrarEditar(agendamento: Agendamento) {
		this.eventModalCadastrarEditar.emit({ agendamento: agendamento })
	}

	abrirModalDeletar(agendamento: Agendamento) {
		this.eventModalDeletar.emit({ agendamento: agendamento })
	}

	abrirModalEditarStatus(statusFinal: string, agendamento: Agendamento) {
		this.eventModalEditarStatus.emit(
			{ statusFinal: statusFinal, 
			  agendamento: agendamento 
			})
	}

}
