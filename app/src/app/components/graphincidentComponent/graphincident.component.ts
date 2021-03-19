/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { chartIncidentService } from '../../sd-services/chartIncidentService'
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-graphincident',
    templateUrl: './graphincident.template.html'
})

export class graphincidentComponent extends NBaseComponent implements OnInit {

    barChartData:any[] = [];
    //  [
    //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];
    
    barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

    mycharclick(){
        alert("chart clicked");
    }

    constructor(public clientService: chartIncidentService) {
        super();
    }

    async callClientService() {
      const resultData = (await this.clientService.getdatachart()).local.result
      console.log('resultDatta ', resultData)
    //   var log = [];
     resultData.forEach(function (value) {
         var dataIncident = { data: [60, 10], label: value.subject }
            console.log(dataIncident);
            barChartData.push(dataIncident);
        }); 
// console.log(log);
    //   this.datasource = new MatTableDataSource(resultData)
    }
    ngOnInit() {
      this.callClientService()
    }
}
