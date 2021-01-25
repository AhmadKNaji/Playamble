import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],

})

@Injectable()
export class SmartTableComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
      position: 'right',

    },

    columns: {
      name: {
        title: 'Name',
        type: 'string',
        filter: false,
      },
      description: {
        title: 'Description',
        type: 'string',
        filter: false,
      },
      dateCreated: {
        title: 'Date created',
        type: 'string',
        filter: false,
      },
    },

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
    private http: HttpClient,
    private router: Router,
  ) { }



  ngOnInit() {

  }


  onSelect(event): void {
    
  }



  onSearch(query: string = '') {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'name',
          search: query,
        },
        {
          field: 'description',
          search: query,
        },
        {
          field: 'dateCreated',
          search: query,
        },
      ], false);
      // second parameter specifying whether to perform 'AND' or 'OR' search
      // (meaning all columns should contain search query or at least one)
      // 'AND' by default, so changing to 'OR' by setting false here
    }
  }
}
