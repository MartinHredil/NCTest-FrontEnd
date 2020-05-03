import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/provider/ClientesService/clientes.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  clientes;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
