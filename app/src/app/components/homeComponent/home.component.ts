/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog } from '@angular/material/dialog';
import { addincidencepageComponent } from '../addincidencepageComponent/addincidencepage.component'
import { updatepageComponent } from '../updatepageComponent/updatepage.component'
import { MatTable, MatTableDataSource } from '@angular/material/table'
import { incidenceService } from '../../sd-services/incidenceService'
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'
// import { MatDialogRef } from '@angular/material';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/


@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    datasource
    // dataDialogRef: MatDialogRef<addincidencepageComponent>;
    constructor(public dialog: MatDialog, public clientService: incidenceService, public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    async callClientService() {
      const resultData = (await this.clientService.getdata()).local.result
      console.log('resultDatta ', resultData)
      this.datasource = new MatTableDataSource(resultData)
    }

    ngOnInit() {
      this.callClientService()
    }


   async deleterecord(e) {
       if (confirm("Are you sure?")) {
        const reqbody = { body: {
                "filter": {
                    "_id": e
            }
        }}
        const resultData = (await this.clientService.deletedata(reqbody))
        console.log('result ', resultData)
        this.ngOnInit()
       }
    }


     openEditDialog(e) {
        const dialogRef = this.dialog.open(updatepageComponent, {
           width: '320px',
           data: {e}
        });
        dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit()
        console.log('close', JSON.stringify(result));
    });
    }
}
