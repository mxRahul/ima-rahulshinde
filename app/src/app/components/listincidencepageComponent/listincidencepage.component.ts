/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTable, MatTableDataSource } from '@angular/material/table'
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
    selector: 'bh-listincidencepage',
    templateUrl: './listincidencepage.template.html'
})

export class listincidencepageComponent extends NBaseComponent implements OnInit {
    data = [
        {
          "name": "Rahul",
          "email": "rahul@gmail.com",
          "contact": "8286246069"
        },
        {
          "name": "Abc",
          "email": "abc@gmail.com",
          "contact": "8286246069"
        },
        {
           "name": "XYZ",
          "email": "xyz@gmail.com",
          "contact": "8286246069"
        }
    ]
   
    dataSource = new MatTableDataSource(this.data)

    constructor(public clientService: incidenceService) {
        super();
    }

    async callClientService() {
      const resultData = (await this.clientService.getdata()).local.result
      console.log('resultt === ', resultData)
    }

    ngOnInit() {
        console.log('11')
        this.callClientService()
    }

}
