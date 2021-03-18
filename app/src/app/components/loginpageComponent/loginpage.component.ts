/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userdata } from 'app/models';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
import { Router } from '@angular/router'
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-loginpage',
    templateUrl: './loginpage.template.html'
})

export class loginpageComponent extends NBaseComponent implements OnInit {
    loginForm: FormGroup
    username: string
    childmessage
    childView: boolean = false
    childMeessageView: boolean = false
    userdetails: userdata

    constructor(private _formBuilder: FormBuilder, public neutrinosOAuthClientService: NeutrinosOAuthClientService,  private router: Router) {
        super();
    }

    ngOnInit() {
     this.loginForm = this._formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    login() {
        this.childView = true
        console.log('Login details === ', this.loginForm.value)
        this.username = this.loginForm.value.userName
        this.userdetails = {
            username: this.loginForm.value.userName,
            password: this.loginForm.value.password
        }
    }

    renderchildmessage(message) {
        this.childMeessageView = true
        this.childmessage = message
    }

     Loginneutrinos() {
        this.neutrinosOAuthClientService.login().then(loggedin => {
            // User logged in
            console.log('login', loggedin)
            this.router.navigate(['/home']);
        }).catch(loginError => {
            // Login error
        });
    }

    logout() {
        this.neutrinosOAuthClientService.logout().then(logoutSuccess => {
            // User logged out
            console.log('logout')
        }).catch(logoutError => {
            // User logout error
        });
    }
}
