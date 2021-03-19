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

    barChartData:any[] = [
        {
            label: 'Insiden per Hari',
      data: []
    }
    ];
    barChartLabels = [1, 2, 3];
    barChartOptions = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
            unit:'day'
        }
      }],
      yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
    }
  }
    showChart = false;

    mycharclick(){
        alert("chart clicked");
    }

    constructor(public clientService: chartIncidentService) {
        super();
    }

    async callClientService() {
        let _this = this;
        const resultData = (await this.clientService.getdatachart()).local.result
        console.log('resultDatta ', resultData)
        
        resultData.forEach(function (value) {
            let _t = new Date(value.dateValue)
            _t.setHours(0,0,0);
            let isExist = _this.barChartData[0].data.filter(el => el.t.getTime() === _t.getTime()).length > 0;

            if (isExist) {
                _this.barChartData[0].data.find(el => el.t.getTime() === _t.getTime()).y += 1;
            } else {
                _this.barChartData[0].data.push({
                    t: _t,
                    y: 1
                })
            }
        });

        console.log(this.barChartData);
        this.showChart = true;
    }

    ngOnInit() {
      this.callClientService()
    }
}