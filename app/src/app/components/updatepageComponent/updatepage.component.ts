/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject } from '@angular/core'
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
    selector: 'bh-updatepage',
    templateUrl: './updatepage.template.html'
})

export class updatepageComponent extends NBaseComponent implements OnInit {

    firstFormGroup: FormGroup;
    validPattern = "^[a-zA-Z0-9]{10}$"
    subject;
    description;
    priority;
    date;
    id;
    // dataDialogRef: MatDialogRef<addincidencepageComponent>
    constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<updatepageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any ,public clientService: incidenceService) {
        super();
        this.id = data.e._id
        this.subject = data.e.subject
        this.description = data.e.description
        this.priority = data.e.priority
        this.date = data.e.dateValue
    }

    async callClientService(firstFormGroup) {
      const reqbody = {
          id: this.id,
          body: firstFormGroup
      }
      const resultData = (await this.clientService.updatedata(reqbody)).local.result
      console.log('resultt === ', resultData)
    }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        subject: [this.subject, Validators.pattern('^[a-zA-Z \-\']+')],
        description: [this.description,[Validators.required, Validators.pattern(this.validPattern)]],
        dateValue: [this.date,  Validators.required],
        priority: [this.priority,  Validators.required]
      });
    }

    onDate(event) {
      this.firstFormGroup.controls.dateValue.setValue(event.value)
    }

    onSubmit() {
        console.log('subject --', this.firstFormGroup.value.subject)
        this.callClientService( this.firstFormGroup.value)
        this.dialogRef.close(`${this.firstFormGroup.value}`);
    }
}
