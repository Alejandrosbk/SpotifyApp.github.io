import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor( private router: Router, private authService: AuthService ) { }

  // HACEMOS LAS VALIDACIONES DE LOS INPUTS
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  // FUNCION PARA ENVIAR LOS DATOS QUE CAPTURA EL FORM HACIA EL SERVICIO
  sendLogin() {
    const {email, password} = this.formLogin.value;
    this.authService.sendCredentials(email, password);
  }

}
