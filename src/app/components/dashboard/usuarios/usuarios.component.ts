import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: "admin", nombre: "Marlon", apellido: "Orihuela", sexo: "Masculino"},
    {usuario: "mgomez", nombre: "Martin", apellido: "Gomez", sexo: "Masculino"},
    {usuario: "ngarcia", nombre: "Nicolas", apellido: "Garcia", sexo: "Masculino"},
    {usuario: "jperez", nombre: "Juan", apellido: "Perez", sexo: "Masculino"},
    {usuario: "storres", nombre: "Sandra", apellido: "Torres", sexo: "Femenino"},
    {usuario: "nmendez", nombre: "Natalia", apellido: "Mendez", sexo: "Femenino"}
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
