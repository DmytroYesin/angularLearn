import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuServiceService {

  constructor() { }

  public getUsers(): Array<any> {
    return [
        {firstName: "Ivan", lastName: "Petrov"},
        {firstName: "Dmytro", lastName: "Yesin"},
        {firstName: "Alex", lastName: "Sanchez"},
        {firstName: "Nick", lastName: "Koldun"}
    ];
  };
}
