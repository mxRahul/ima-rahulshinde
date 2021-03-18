import { userdata } from '../src/app/models/userdata.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
userdata: userdata;
//DECLARE NEW VARIABLE

constructor() {
this.userdata = new userdata();
//CREATE NEW DM INSTANCE
    }
}