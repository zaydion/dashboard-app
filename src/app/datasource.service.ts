import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { DataSource } from './datasource';


@Injectable()
export class DataSourceService {
  constructor(private http: Http) { }

  getDataSources(): Promise<DataSource[]> {
    return this.http.get("app/datasets.json")
               .toPromise()
               .then(this.extractData);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.datasources;
  }
}
