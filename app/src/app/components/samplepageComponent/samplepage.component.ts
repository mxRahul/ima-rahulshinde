/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { userdata } from 'app/models';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-samplepage',
    templateUrl: './samplepage.template.html'
})

export class samplepageComponent extends NBaseComponent implements OnInit {
    @Input() receiveduserName: userdata
    @Output() res = new EventEmitter<string>()

    constructor() {
        super();
    }

    ngOnInit() {
       console.log('receiveduserName', this.receiveduserName)
    }

    onsend() {
        this.res.emit('Recieved message successfully')
    }
}
