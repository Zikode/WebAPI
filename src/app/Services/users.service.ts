import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../Models/Users';
import { Observable } from 'rxjs';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) { }

  Login(Username:string,password:string) : Observable<Users>
  {
    const url =`https://localhost:44300/api/Users/${Username},${password}`;
    return this.http.get<Users>(url);
  }

  registerUser(user: Users): Observable<Users> {
        const url =`https://localhost:44300/api/Users/`;
    return this.http.post<Users>(url, user, httpOptions);
  }

  updateUserBalance(User: Users):Observable<Users>
{
  const url =`https://localhost:44300/api/Users/${User.userID}`;
  return this.http.put<Users>(url, User, httpOptions);
}

}
