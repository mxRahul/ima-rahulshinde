/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
import { addincidencepageComponent } from '../addincidencepageComponent/addincidencepage.component'
import { MatDialog } from '@angular/material/dialog';
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
    selector: 'bh-header',
    templateUrl: './header.template.html'
})

export class headerComponent extends NBaseComponent implements OnInit {

    constructor(public neutrinosOAuthClientService:NeutrinosOAuthClientService,public dialog:MatDialog, private router:Router) {
        super();
    }

    ngOnInit() {

    }

    openDialog() {
        const dialogRef = this.dialog.open(addincidencepageComponent, {
           width: '320px',
           data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit()
        console.log('close', JSON.stringify(result));
    });
    }

    logout() {
       this.neutrinosOAuthClientService.logout('loginpage')
    }

    gotoprofile() {
        window.open("profilepage","_self")
    }

    gotohome() {
        window.open("home","_self")
    }

    openchart(){
        // route to chart
        this.router.navigateByUrl('/chart');
    }
}
