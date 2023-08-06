import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface AuthUserData {
  username: string,
  password: string,
}

interface LoginUser {
  user: string | { error: string }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private api = `http://localhost:4000/api/users`
  public isLogged: boolean = false

  constructor(private http: HttpClient) {
  }

  register(username: string, password: string) {
    const data: AuthUserData = {
      username,
      password
    }

    return this.http.post<AuthUserData>(`${this.api}/create`, data)
  }

  login(username: string, password: string) {
    const data: AuthUserData = {
      username,
      password
    }

    return this.http.post<string>(`${this.api}/login`, data)
  }

  isLoggedUser(){
    return this.isLogged || localStorage.getItem('jwt') ? true : false
  }
}
