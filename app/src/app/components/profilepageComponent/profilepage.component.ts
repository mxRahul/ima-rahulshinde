/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
import {FormBuilder} from '@angular/forms'
import { incidenceService } from '../../sd-services/incidenceService'
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

    constructor(public neutrinosOAuthClientService:NeutrinosOAuthClientService, public fb:FormBuilder, public clientService: incidenceService) {
        super();
    }

    ngOnInit() {
        console.log(this.neutrinosOAuthClientService.userInfo)
        let userinfo = this.neutrinosOAuthClientService.userInfo
        this.getuser(userinfo)
    }
   
    async getuser(userinfo) {
        const userData = await this.callClientGetService(userinfo.username)
          this.profileForm = this.fb.group({
            username: [userData[0].username],
            displayName: [userData[0].displayName],
            subscriptionType: [userinfo.additional.subscription.type],
            title:[userData[0].title],
            city:[userData[0].city],
            address:[userData[0].address],
            region:[userData[0].region]
        })
    }

    async callClientService(profileForm) {
      console.log('firstFormGroup === ', profileForm)
      const resultData = (await this.clientService.adduser(profileForm)).local.result
      console.log('resultt === ', resultData)
    }
    
    
    async callClientGetService(username) {
      console.log('username === ', username)
      const resultData = (await this.clientService.getuser(username)).local.result
      return  resultData
    }

    submit() {
      this.callClientService(this.profileForm.value)
    }
}
