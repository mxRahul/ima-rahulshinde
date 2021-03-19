/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
import {FormBuilder} from '@angular/forms'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-profilepage',
    templateUrl: './profilepage.template.html'
})

export class profilepageComponent extends NBaseComponent implements OnInit {

    titles = ["Developer", "Admin", "External User"]
    regions = ["Asia Pacific", "Middle East", "Europe", "North America", "Rest of World"];
    profileForm;

    constructor(public neutrinosOAuthClientService:NeutrinosOAuthClientService, public fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        console.log(this.neutrinosOAuthClientService.userInfo)
        let userinfo = this.neutrinosOAuthClientService.userInfo
        this.profileForm = this.fb.group({
            username: [userinfo.username],
            displayName: [userinfo.displayName],
            subscriptionType: [userinfo.additional.subscription.type],
            title:[''],
            city:[''],
            address:[''],
            region:['']
        })
    }
}
