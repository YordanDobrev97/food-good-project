import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface AuthUserData {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  register(username: string, password: string) {
    const data: AuthUserData = {
      username,
      password
    }

    return this.http.post<AuthUserData>(`http://localhost:4000/api/users/create`, data)
  }
}
