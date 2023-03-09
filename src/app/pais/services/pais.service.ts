import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Capital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino}`;
    
    return this.http.get<Country[]>( url, {params: this.httpParams} );


      /* Manejo de errores desde esta capa
      .pipe(
        catchError(err => of([]))
      );*/
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino}`;
    
    return this.http.get<Country[]>( url, {params: this.httpParams} );


      /* Manejo de errores desde esta capa
      .pipe(
        catchError(err => of([]))
      );*/
  }

  getPaisPorId( id: string ): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id}`;
    
    return this.http.get<Country>( url );


      /* Manejo de errores desde esta capa
      .pipe(
        catchError(err => of([]))
      );*/
  }

  getPaisPorRegion(region:string): Observable<Country[]>{
    
 

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );
    
  }

}
