import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlats } from '../list/list';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatserviceService {
  //  private readonly Platapi = '/api/plats.json';
  private plats: IPlats[] = [
    {
      id: 1,
      nom: 'BBH',
      prix: 250,
      restaurant: 'CHEZ MARTIN',
      image: 'assets/BBH.jpg'
    },
    {
      id: 2,
      nom: 'Crepes',
      prix: 300,
      restaurant: 'CLAIRE CREPES',
      image: 'assets/crepes.jpeg'
    },
    {
      id: 3,
      nom: 'poulet + plantains',
      prix: 1000,
      restaurant: 'CHEZ MARTIN',
      image: 'assets/poulet.jpg'
    },
    {
      id: 4,
      nom: 'ndolè + plantains',
      prix: 1000,
      restaurant: 'Cité la blanche',
      image: 'assets/ndolè.jpeg'
    }
  ] ;

  constructor() { }

  // public getPlats():Observable<IPlats[]>{
  //  return this.http.get<IPlats[]>(this.Platapi)
  //  .pipe(
  //   tap(plats => console.log('plats:', plats),
  //   catchError(this.handleError)
  //   )
  //  )
  
  // }

  getPlats(): IPlats[] {
    return this.plats;
  }

  getPlatsById(id: string): IPlats|undefined {
   return this.plats.find(plats => plats.id === id);
    
  }
}


  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

