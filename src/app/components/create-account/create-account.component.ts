import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  users: User[] = [];

  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.maxLength(10)]],
    address: this.fb.group({
      city: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(5)]],
      suite: [''],
      street: ['', Validators.required]
    })
  }); 

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }


  private getData() {
    this.authService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;        
      },
      (e) => console.error(e)
    )
  }

  ngOnInit(): void {
    this.getData();
  }

  addUser() {
    const config = this.userForm.value;
    this.authService.addUser(config).subscribe(
      (user: User) => {
        this.users.push(user);
      },
      (e) => console.error(e)
    )
  }
}
 