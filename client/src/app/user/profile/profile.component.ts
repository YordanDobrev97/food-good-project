import { Component, OnInit } from '@angular/core'
import { getDecodedAccessToken } from '../../utils'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: { username: string } = { username: '' }
  orders: [] = []

  ngOnInit(): void {
    const token = localStorage.getItem('jwt') || ''
    const userData = getDecodedAccessToken(token)
    this.user.username = userData.username
  }
}
