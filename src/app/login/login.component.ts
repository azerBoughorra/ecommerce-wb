import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = "";
  password: string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.login(this.user, this.password).subscribe(output => {


      this.loginService.setToken(output.token);
      this.router.navigate(['/shop'])

    },
      error => {
        alert('Credentials invalide')
      }
    );
  }

}
