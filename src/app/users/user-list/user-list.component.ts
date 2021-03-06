import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gmail.com'
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gmail.com'
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gmail.com'
    }
  ]

  userFilter =[];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.users;
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
        return user.name.indexOf(keyword) != -1;
    })
  }

  delete(id){
    let remain = [];
    this.userFilter.map(user => {
      if(user.id != id){
        remain.push(user)
      }
    })
    this.userFilter = remain;
  }

}
