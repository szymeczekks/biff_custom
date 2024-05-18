import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private data: any = [
  //   {
  //     "name": "Szymon",
  //     "age": 23,
  //     "profession": "Full stack developer"
  //   }
  // ];
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor() {
    this.dataSubject.next([
      {
        "name": "Szymon",
        "age": 23,
        "profession": "Full stack developer"
      },
      {
        "name": "Szymon",
        "age": 23,
        "profession": "Full stack developer"
      },
      {
        "name": "Szymon",
        "age": 23,
        "profession": "Full stack developer"
      },
      {
        "name": "Szymon",
        "age": 23,
        "profession": "Full stack developer"
      }
    ]);
  }

  // getData(): Observable<any[]> {
  //   return of(this.data);
  // }

  deleteByName(name: any) {
    const filteredData = this.dataSubject.getValue().filter((obj: any) => obj.name !== name.name);
    this.dataSubject.next(filteredData);
  }

  addData(newData: any) {
    if (Object.keys(newData).length !== 0) {
      this.dataSubject.next([...this.dataSubject.getValue(), newData]);
    }
  }
}
