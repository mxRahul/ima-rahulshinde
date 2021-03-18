let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class idsutil {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'idsutil';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new idsutil(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_HCuIxFHGGfD24rWH(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ud97o0RK8D6xPHmg');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_0FTBlFQFSde9Jen3(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Jz2mGS2kZvpmUBxn');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ehby8Pu6dlJvvlhK(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SuDH2fYpwJ10kHO8');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_HCuIxFHGGfD24rWH(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_bkh5ZJPF7LZyCG9W(bh);
      //appendnew_next_sd_HCuIxFHGGfD24rWH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HCuIxFHGGfD24rWH');
    }
  }

  async sd_bkh5ZJPF7LZyCG9W(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hdwAl2tSvZ3OzJiQ(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yngPDqZWvDyH2ZAM(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bkh5ZJPF7LZyCG9W');
    }
  }

  async sd_hdwAl2tSvZ3OzJiQ(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_q3jDM02qhkORBF1v(bh);
      //appendnew_next_sd_hdwAl2tSvZ3OzJiQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hdwAl2tSvZ3OzJiQ');
    }
  }

  async sd_q3jDM02qhkORBF1v(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_q3jDM02qhkORBF1v
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q3jDM02qhkORBF1v');
    }
  }

  async sd_yngPDqZWvDyH2ZAM(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_yngPDqZWvDyH2ZAM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yngPDqZWvDyH2ZAM');
    }
  }

  async sd_0FTBlFQFSde9Jen3(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_0FTBlFQFSde9Jen3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0FTBlFQFSde9Jen3');
    }
  }

  async sd_ehby8Pu6dlJvvlhK(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_q11dALC2DRq1AUe0(bh);
      //appendnew_next_sd_ehby8Pu6dlJvvlhK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ehby8Pu6dlJvvlhK');
    }
  }

  async sd_q11dALC2DRq1AUe0(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_iI0Vle4LSlvy51gs(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ugkcmNavuylpTkDF(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q11dALC2DRq1AUe0');
    }
  }

  async sd_iI0Vle4LSlvy51gs(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_iI0Vle4LSlvy51gs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iI0Vle4LSlvy51gs');
    }
  }

  async sd_ugkcmNavuylpTkDF(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_XNT2XVVVo5I04IOp(bh);
      //appendnew_next_sd_ugkcmNavuylpTkDF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ugkcmNavuylpTkDF');
    }
  }

  async sd_XNT2XVVVo5I04IOp(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_UrMRbMwRfJZpXjCS(bh);
      //appendnew_next_sd_XNT2XVVVo5I04IOp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XNT2XVVVo5I04IOp');
    }
  }

  async sd_UrMRbMwRfJZpXjCS(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_itYvGqgz11Zno88Y(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_t0NVjfczP576gb26(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UrMRbMwRfJZpXjCS');
    }
  }

  async sd_itYvGqgz11Zno88Y(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_itYvGqgz11Zno88Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_itYvGqgz11Zno88Y');
    }
  }

  async sd_t0NVjfczP576gb26(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_t0NVjfczP576gb26
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t0NVjfczP576gb26');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_MXYyI0ZkIsqRhVfx(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_MXYyI0ZkIsqRhVfx(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_t0NVjfczP576gb26(bh);
      //appendnew_next_sd_MXYyI0ZkIsqRhVfx
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
