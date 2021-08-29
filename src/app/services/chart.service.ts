import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chart } from '@app/models';
import { ChartFailure, ChartSuccess } from '@app/store/actions';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private BASE_URL = environment.chartApi;
  
  constructor(private http: HttpClient) {}

  getChart(): Observable<Chart> {
    const url = `${this.BASE_URL}`;
    return this.http.get<Chart>(url).pipe(
      map((data: any) => { 
        return data.Value; 
      })
    );
  }

}
