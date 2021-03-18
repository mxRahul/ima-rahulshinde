/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    selector: 'bh-addincidencepage',
    templateUrl: './addincidencepage.template.html'
})

export class addincidencepageComponent extends NBaseComponent implements OnInit {
    firstFormGroup: FormGroup;
    validPattern = "^[a-zA-Z0-9]{10}$"
    // dataDialogRef: MatDialogRef<addincidencepageComponent>
    constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<addincidencepageComponent>,
         public clientService: incidenceService) {
        super();
    }

    async callClientService(firstFormGroup) {
      console.log('firstFormGroup === ', firstFormGroup)
      const resultData = (await this.clientService.addincidence(firstFormGroup)).local.result
      console.log('resultt === ', resultData)
    }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        subject: ['', Validators.pattern('^[a-zA-Z \-\']+')],
        description: ['',[Validators.required, Validators.pattern(this.validPattern)]],
        dateValue: ['',  Validators.required],
        priority: ['',  Validators.required]
      });
    }

    onDate(event) {
    //   this.dateValue = event.value
      this.firstFormGroup.controls.dateValue.setValue(event.value)
    }

    onSubmit() {
        this.callClientService(this.firstFormGroup.value)
        this.dialogRef.close(`${this.firstFormGroup.value}`);
    }
}
