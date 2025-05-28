import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { MaskPhonenuPipe } from '../../pipes/mask-phonenu.pipe';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-display-user',
  standalone: true,
  imports: [MaskPhonenuPipe, NgFor, NgIf],
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.css'
})
export class DisplayUserComponent {
  users: User[] = []; 
  
    constructor(private _userService: UserService) {}
  
    ngOnInit(){
      this._userService.getUsers().subscribe(
        (data: User[]) => {
          this.users = data;
        }
      );
    }
}
