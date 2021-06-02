import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: User;

  constructor(private userService: UserService, private activeteRoute: ActivatedRoute) {
    this.activeteRoute.params.subscribe(parameters => {
      if (parameters.id) {
        this.userService.getSingleUser(parameters.id).subscribe(response => {
          this.user = response.data;
          console.log(this.user);
        });
      }
    });
  }



  ngOnInit() {
  }

}
