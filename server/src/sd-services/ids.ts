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
import * as sd_7Spwkvl93ZMsARrN from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_VYjRAw6CvtHvLnOj(bh);
          //appendnew_next_sd_UgBbC5EsmZyQLrPJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UgBbC5EsmZyQLrPJ');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_Tt2hKapmhDqF7W9t(bh);
          //appendnew_next_sd_xfarrjE3OlwfvHZL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xfarrjE3OlwfvHZL');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_lh3KepwKY0ryKAC5(bh);
          //appendnew_next_sd_rQWhmUulMJKf8jiI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rQWhmUulMJKf8jiI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_Vw2PedtjO8wAoaaS(bh);
          //appendnew_next_sd_riV1KvXquyljL6Rw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_riV1KvXquyljL6Rw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_qFzr32d63mRHbJbE(bh);
          //appendnew_next_sd_Cl8FWJzFnLDAFFYq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Cl8FWJzFnLDAFFYq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_VtTQfT3MTl0WYe0L(bh);
          //appendnew_next_sd_sELet8y2mzWylE6e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sELet8y2mzWylE6e');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_kVT9sWICWFvx3Jn5(bh);
          //appendnew_next_sd_dBAkhBiF9yaXGBjf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dBAkhBiF9yaXGBjf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_lh3KepwKY0ryKAC5(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_t4LzDraH3XKAkHbT(bh);
      //appendnew_next_sd_lh3KepwKY0ryKAC5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lh3KepwKY0ryKAC5');
    }
  }

  async sd_t4LzDraH3XKAkHbT(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PTKOnRrTF81HWvHa(bh);
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
        bh = await this.sd_Aj82bpyAUzIlsiA4(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t4LzDraH3XKAkHbT');
    }
  }

  async sd_PTKOnRrTF81HWvHa(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_2la23ZovymRoxxZJ(bh);
      //appendnew_next_sd_PTKOnRrTF81HWvHa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PTKOnRrTF81HWvHa');
    }
  }

  async sd_2la23ZovymRoxxZJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_aTQZdI4GEj99x0IO(bh);
      //appendnew_next_sd_2la23ZovymRoxxZJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2la23ZovymRoxxZJ');
    }
  }

  async sd_aTQZdI4GEj99x0IO(bh) {
    try {
      const sd_7Spwkvl93ZMsARrNInstance: sd_7Spwkvl93ZMsARrN.idsutil = sd_7Spwkvl93ZMsARrN.idsutil.getInstance();
      let outputVariables = await sd_7Spwkvl93ZMsARrNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_QgkwmkW7Tof7Slvx(bh);
      //appendnew_next_sd_aTQZdI4GEj99x0IO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aTQZdI4GEj99x0IO');
    }
  }

  async sd_QgkwmkW7Tof7Slvx(bh) {
    try {
      const sd_7Spwkvl93ZMsARrNInstance: sd_7Spwkvl93ZMsARrN.idsutil = sd_7Spwkvl93ZMsARrN.idsutil.getInstance();
      let outputVariables = await sd_7Spwkvl93ZMsARrNInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_Q9bQQ61xCRamy5dJ(bh);
      //appendnew_next_sd_QgkwmkW7Tof7Slvx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QgkwmkW7Tof7Slvx');
    }
  }

  async sd_Q9bQQ61xCRamy5dJ(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_d3YE5agjWjniWGmi(bh);
      //appendnew_next_sd_Q9bQQ61xCRamy5dJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q9bQQ61xCRamy5dJ');
    }
  }

  async sd_d3YE5agjWjniWGmi(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d3YE5agjWjniWGmi');
    }
  }

  async sd_Aj82bpyAUzIlsiA4(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_AOoO1uFptVndXNad(bh);
      //appendnew_next_sd_Aj82bpyAUzIlsiA4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Aj82bpyAUzIlsiA4');
    }
  }

  async sd_AOoO1uFptVndXNad(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AOoO1uFptVndXNad');
    }
  }

  async sd_VYjRAw6CvtHvLnOj(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_PdK9cIBYOFgEBTwP(bh);
      //appendnew_next_sd_VYjRAw6CvtHvLnOj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VYjRAw6CvtHvLnOj');
    }
  }

  async sd_PdK9cIBYOFgEBTwP(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PdK9cIBYOFgEBTwP');
    }
  }

  async sd_Vw2PedtjO8wAoaaS(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_fmvCcxjQG6yKHG3F(bh);
      //appendnew_next_sd_Vw2PedtjO8wAoaaS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vw2PedtjO8wAoaaS');
    }
  }

  async sd_fmvCcxjQG6yKHG3F(bh) {
    try {
      const sd_7Spwkvl93ZMsARrNInstance: sd_7Spwkvl93ZMsARrN.idsutil = sd_7Spwkvl93ZMsARrN.idsutil.getInstance();
      let outputVariables = await sd_7Spwkvl93ZMsARrNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_4IUOrdxvj5J4i5jd(bh);
      //appendnew_next_sd_fmvCcxjQG6yKHG3F
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fmvCcxjQG6yKHG3F');
    }
  }

  async sd_4IUOrdxvj5J4i5jd(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_RT46MyaS4pXopUov(bh);
      //appendnew_next_sd_4IUOrdxvj5J4i5jd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4IUOrdxvj5J4i5jd');
    }
  }

  async sd_RT46MyaS4pXopUov(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_yPWdwQi5UF06LWxI(bh);
      //appendnew_next_sd_RT46MyaS4pXopUov
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RT46MyaS4pXopUov');
    }
  }

  async sd_yPWdwQi5UF06LWxI(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_U2eV0WuNt0QQJBnX(bh);
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
        bh = await this.sd_EhRjMycJDP6jI8wL(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yPWdwQi5UF06LWxI');
    }
  }

  async sd_U2eV0WuNt0QQJBnX(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_bGfBxxMowd7auz95(bh);
      //appendnew_next_sd_U2eV0WuNt0QQJBnX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U2eV0WuNt0QQJBnX');
    }
  }

  async sd_bGfBxxMowd7auz95(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bGfBxxMowd7auz95');
    }
  }

  async sd_EhRjMycJDP6jI8wL(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_bRVyU7PLzUDUaxyZ(bh);
      //appendnew_next_sd_EhRjMycJDP6jI8wL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EhRjMycJDP6jI8wL');
    }
  }

  async sd_bRVyU7PLzUDUaxyZ(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bRVyU7PLzUDUaxyZ');
    }
  }

  async sd_qFzr32d63mRHbJbE(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_fE7Z5IdMzKrktnmE(bh);
      //appendnew_next_sd_qFzr32d63mRHbJbE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qFzr32d63mRHbJbE');
    }
  }

  async sd_fE7Z5IdMzKrktnmE(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fE7Z5IdMzKrktnmE');
    }
  }

  async sd_DRXAxwizNSsif5am(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_DRXAxwizNSsif5am
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DRXAxwizNSsif5am');
    }
  }

  async sd_VtTQfT3MTl0WYe0L(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_TI6V2Y1khTLAhtjr(bh);
      //appendnew_next_sd_VtTQfT3MTl0WYe0L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VtTQfT3MTl0WYe0L');
    }
  }

  async sd_TI6V2Y1khTLAhtjr(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_1DAh3pqtJaYQh2Ru(bh);
      //appendnew_next_sd_TI6V2Y1khTLAhtjr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TI6V2Y1khTLAhtjr');
    }
  }

  async sd_1DAh3pqtJaYQh2Ru(bh) {
    try {
      const sd_7Spwkvl93ZMsARrNInstance: sd_7Spwkvl93ZMsARrN.idsutil = sd_7Spwkvl93ZMsARrN.idsutil.getInstance();
      let outputVariables = await sd_7Spwkvl93ZMsARrNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_05iSPJc9OC4F5nz2(bh);
      //appendnew_next_sd_1DAh3pqtJaYQh2Ru
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1DAh3pqtJaYQh2Ru');
    }
  }

  async sd_05iSPJc9OC4F5nz2(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_o3ATyJ8LZy7iNpx9(bh);
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
        bh = await this.sd_joGow2RVqPAk2iOz(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_05iSPJc9OC4F5nz2');
    }
  }

  async sd_o3ATyJ8LZy7iNpx9(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_o3ATyJ8LZy7iNpx9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o3ATyJ8LZy7iNpx9');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_ViLGdy3jdMI4eVPm(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_ViLGdy3jdMI4eVPm(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ViLGdy3jdMI4eVPm');
    }
  }

  async sd_joGow2RVqPAk2iOz(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_ViLGdy3jdMI4eVPm(bh);
      //appendnew_next_sd_joGow2RVqPAk2iOz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_joGow2RVqPAk2iOz');
    }
  }

  async sd_kVT9sWICWFvx3Jn5(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_3kqv1dYqSmP4mVGX(bh);
      //appendnew_next_sd_kVT9sWICWFvx3Jn5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kVT9sWICWFvx3Jn5');
    }
  }

  async sd_3kqv1dYqSmP4mVGX(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_gr5kOVlizkZp2hvd(bh);
      //appendnew_next_sd_3kqv1dYqSmP4mVGX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3kqv1dYqSmP4mVGX');
    }
  }

  async sd_gr5kOVlizkZp2hvd(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Y3zfrYPXgOhkiiwB(bh);
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
        bh = await this.sd_qKIQN6HaE0aK2Qip(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gr5kOVlizkZp2hvd');
    }
  }

  async sd_Y3zfrYPXgOhkiiwB(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_B6DHtousarjRaY0s(bh);
      //appendnew_next_sd_Y3zfrYPXgOhkiiwB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y3zfrYPXgOhkiiwB');
    }
  }

  async sd_B6DHtousarjRaY0s(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B6DHtousarjRaY0s');
    }
  }

  async sd_qKIQN6HaE0aK2Qip(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_fljcaq2sZoFqqIgJ(bh);
      //appendnew_next_sd_qKIQN6HaE0aK2Qip
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qKIQN6HaE0aK2Qip');
    }
  }

  async sd_fljcaq2sZoFqqIgJ(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fljcaq2sZoFqqIgJ');
    }
  }

  async sd_Tt2hKapmhDqF7W9t(bh) {
    try {
      bh.local = {};
      bh = await this.sd_xUOeFalykWDH3HuC(bh);
      //appendnew_next_sd_Tt2hKapmhDqF7W9t
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tt2hKapmhDqF7W9t');
    }
  }

  async sd_xUOeFalykWDH3HuC(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_8n3d3BmGvoElxxWr(bh);
      //appendnew_next_sd_xUOeFalykWDH3HuC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xUOeFalykWDH3HuC');
    }
  }

  async sd_8n3d3BmGvoElxxWr(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_9BeLNpc4Pm3x2K2E(bh);
      //appendnew_next_sd_8n3d3BmGvoElxxWr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8n3d3BmGvoElxxWr');
    }
  }

  async sd_9BeLNpc4Pm3x2K2E(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BRUmKS0RnmQT8iE1(bh);
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
        bh = await this.sd_VztARI5SdmUwNcKx(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9BeLNpc4Pm3x2K2E');
    }
  }

  async sd_BRUmKS0RnmQT8iE1(bh) {
    try {
      const sd_7Spwkvl93ZMsARrNInstance: sd_7Spwkvl93ZMsARrN.idsutil = sd_7Spwkvl93ZMsARrN.idsutil.getInstance();
      let outputVariables = await sd_7Spwkvl93ZMsARrNInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_B2MOFpAyRksiJLXW(bh);
      //appendnew_next_sd_BRUmKS0RnmQT8iE1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BRUmKS0RnmQT8iE1');
    }
  }

  async sd_B2MOFpAyRksiJLXW(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7DnnrxIinSXF2N0F(bh);
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
        bh = await this.sd_D6LOgJu2SKFx294z(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B2MOFpAyRksiJLXW');
    }
  }

  async sd_7DnnrxIinSXF2N0F(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_mrIK9ipMUCNY1FCO(bh);
      //appendnew_next_sd_7DnnrxIinSXF2N0F
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7DnnrxIinSXF2N0F');
    }
  }

  async sd_mrIK9ipMUCNY1FCO(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_R1gwMsIi9Yfnm40j(bh);
      //appendnew_next_sd_mrIK9ipMUCNY1FCO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mrIK9ipMUCNY1FCO');
    }
  }

  async sd_R1gwMsIi9Yfnm40j(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R1gwMsIi9Yfnm40j');
    }
  }

  async sd_D6LOgJu2SKFx294z(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WpZWtv6aVMyVIouR(bh);
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
        bh = await this.sd_NbSBRhzxS0cvAvJm(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D6LOgJu2SKFx294z');
    }
  }

  async sd_WpZWtv6aVMyVIouR(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_EUiDTPBTp3WIIgAd(bh);
      //appendnew_next_sd_WpZWtv6aVMyVIouR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WpZWtv6aVMyVIouR');
    }
  }

  async sd_EUiDTPBTp3WIIgAd(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_NbSBRhzxS0cvAvJm(bh);
      //appendnew_next_sd_EUiDTPBTp3WIIgAd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EUiDTPBTp3WIIgAd');
    }
  }

  async sd_NbSBRhzxS0cvAvJm(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NbSBRhzxS0cvAvJm');
    }
  }

  async sd_VztARI5SdmUwNcKx(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SoNuxZhytFjhtrfG(bh);
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
        bh = await this.sd_nYCF9vDzFdZZRBTk(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VztARI5SdmUwNcKx');
    }
  }

  async sd_SoNuxZhytFjhtrfG(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_R1gwMsIi9Yfnm40j(bh);
      //appendnew_next_sd_SoNuxZhytFjhtrfG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SoNuxZhytFjhtrfG');
    }
  }

  async sd_nYCF9vDzFdZZRBTk(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_R1gwMsIi9Yfnm40j(bh);
      //appendnew_next_sd_nYCF9vDzFdZZRBTk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nYCF9vDzFdZZRBTk');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_h2ESD2FMATR9SJzM(bh)) ||
      (await this.sd_zoCzSoaXw5OeJRys(bh))
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
  async sd_h2ESD2FMATR9SJzM(bh) {
    const nodes = [
      'sd_QgkwmkW7Tof7Slvx',
      'sd_riV1KvXquyljL6Rw',
      'sd_fmvCcxjQG6yKHG3F',
      'sd_4IUOrdxvj5J4i5jd',
      'sd_Vw2PedtjO8wAoaaS',
      'sd_yPWdwQi5UF06LWxI',
      'sd_U2eV0WuNt0QQJBnX',
      'sd_EhRjMycJDP6jI8wL',
      'sd_bGfBxxMowd7auz95',
      'sd_bRVyU7PLzUDUaxyZ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_DRXAxwizNSsif5am(bh);
      //appendnew_next_sd_h2ESD2FMATR9SJzM
      return true;
    }
    return false;
  }
  async sd_zoCzSoaXw5OeJRys(bh) {
    const nodes = ['sd_BRUmKS0RnmQT8iE1'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_mrIK9ipMUCNY1FCO(bh);
      //appendnew_next_sd_zoCzSoaXw5OeJRys
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
