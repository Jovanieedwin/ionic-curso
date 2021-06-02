import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
users: User[]=[];
  constructor(private userService:UserService, private router:Router) {
    this.userService.getUser().subscribe(response =>{
     this.users = response.data;
     console.log(this.users);

    },err =>{

    } );
  }

  goToUser(id: number){
    this.router.navigate(['user',id]);
  }
}
