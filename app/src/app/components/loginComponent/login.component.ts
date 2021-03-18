/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {

    constructor(public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {

    }

    Login() {
        this.neutrinosOAuthClientService.login().then(loggedin => {
            // User logged in
            console.log('login')
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
