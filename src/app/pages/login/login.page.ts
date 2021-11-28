import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  usuario = {

    nombre:'',

    password:''

  }

  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }

}
