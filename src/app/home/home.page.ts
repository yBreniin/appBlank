/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perPage;
  total;
  totalPages;
  data;

  constructor(private api: ApiService) {
    this.buscarTodos();
  }

  buscarTodos(page=1){
    this.api.buscarUsuarios(page).subscribe(usuarios=>{
      console.log(usuarios);
      this.page = usuarios['page'];
      this.perPage = usuarios['per_page'];
      this.total = usuarios['total'];
      this.totalPages = usuarios['total_pages'];
      this.data = usuarios['data'];
    });
  }

}
