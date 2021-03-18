/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class incidenceService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_incidenceService

  async getdata(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getalldata(bh);
      //appendnew_next_getdata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dGGNDnfNFGrhODsr');
    }
  }

  async addincidence(body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.adddata(bh);
      //appendnew_next_addincidence
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tY7k7IfL4H1zKBNN');
    }
  }

  async deletedata(body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_mNKZBaI06EMon0wt(bh);
      //appendnew_next_deletedata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z36zjEVt0PIwYHzv');
    }
  }

  async updatedata(body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_UcgsCiUPfhDMAJla(bh);
      //appendnew_next_updatedata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LL1Or25Wcj0GAfvF');
    }
  }

  //appendnew_flow_incidenceService_start

  async getalldata(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getallicidence/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getalldata
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zm23mkZFnXDdZdAr');
    }
  }

  async adddata(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addincidence/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_adddata
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7gxmYzV5z9GHEgKl');
    }
  }

  async sd_mNKZBaI06EMon0wt(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteicidence/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_mNKZBaI06EMon0wt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mNKZBaI06EMon0wt');
    }
  }

  async sd_UcgsCiUPfhDMAJla(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateicidence/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: { _id: 'bh.local.body.id' },
        body: bh.local.body.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_UcgsCiUPfhDMAJla
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UcgsCiUPfhDMAJla');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_incidenceService_Catch
}
