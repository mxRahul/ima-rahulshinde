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
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class incidenceService {
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
    this.serviceName = 'incidenceService';
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
      instance = new incidenceService(
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
      //appendnew_flow_incidenceService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: incidenceService');

    //appendnew_flow_incidenceService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: incidenceService');

    if (!this.swaggerDocument['paths']['/getallicidence']) {
      this.swaggerDocument['paths']['/getallicidence'] = {
        get: {
          summary: 'Get All Data',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/getallicidence']['get'] = {
        summary: 'Get All Data',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getallicidence`,
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
          bh = await this.getdata(bh);
          //appendnew_next_sd_az7nupXGkTNrcpdm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_az7nupXGkTNrcpdm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addincidence']) {
      this.swaggerDocument['paths']['/addincidence'] = {
        post: {
          summary: 'Add Incidence Data',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'subject',
              description: 'Subject of incidence',
              required: true,
            },
            {
              in: 'body',
              name: 'priority',
              description: 'priority of incidence',
              required: true,
            },
            {
              in: 'body',
              name: 'description',
              description: 'description',
              required: true,
            },
            {
              in: 'body',
              name: 'dateValue',
              description: 'date of incidence',
              required: true,
            },
          ],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/addincidence']['post'] = {
        summary: 'Add Incidence Data',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'subject',
            description: 'Subject of incidence',
            required: true,
          },
          {
            in: 'body',
            name: 'priority',
            description: 'priority of incidence',
            required: true,
          },
          {
            in: 'body',
            name: 'description',
            description: 'description',
            required: true,
          },
          {
            in: 'body',
            name: 'dateValue',
            description: 'date of incidence',
            required: true,
          },
        ],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addincidence`,
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
          bh = await this.adddatta(bh);
          //appendnew_next_sd_CiJ6NCk8xXxGzUqr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CiJ6NCk8xXxGzUqr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteicidence']) {
      this.swaggerDocument['paths']['/deleteicidence'] = {
        post: {
          summary: 'Delete Incidence Data',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'query',
              name: '_id',
              description: 'id of record',
              required: true,
            },
          ],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteicidence']['post'] = {
        summary: 'Delete Incidence Data',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'query',
            name: '_id',
            description: 'id of record',
            required: true,
          },
        ],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/deleteicidence`,
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
          bh = await this.deleterecord(bh);
          //appendnew_next_sd_DPEblx7k8wUKsJsT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DPEblx7k8wUKsJsT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateicidence']) {
      this.swaggerDocument['paths']['/updateicidence'] = {
        put: {
          summary: 'Update All Data',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'query',
              name: '_id',
              description: 'id of record',
              required: true,
            },
            {
              in: 'body',
              name: 'subject',
              description: 'subject ',
              required: true,
            },
            {
              in: 'body',
              name: 'description',
              description: 'deescription',
              required: true,
            },
            {
              in: 'body',
              name: 'priority',
              description: 'priority',
              required: true,
            },
            {
              in: 'body',
              name: 'dateValue',
              description: 'date',
              required: true,
            },
          ],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateicidence']['put'] = {
        summary: 'Update All Data',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'query',
            name: '_id',
            description: 'id of record',
            required: true,
          },
          {
            in: 'body',
            name: 'subject',
            description: 'subject ',
            required: true,
          },
          {
            in: 'body',
            name: 'description',
            description: 'deescription',
            required: true,
          },
          {
            in: 'body',
            name: 'priority',
            description: 'priority',
            required: true,
          },
          {
            in: 'body',
            name: 'dateValue',
            description: 'date',
            required: true,
          },
        ],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateicidence`,
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
          bh = await this.sd_y0zUzKPjNEezO4f4(bh);
          //appendnew_next_sd_KfFF5MRwH5njyWs2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KfFF5MRwH5njyWs2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/adduser']) {
      this.swaggerDocument['paths']['/adduser'] = {
        post: {
          summary: 'Add user Data',
          description: '',
          consumes: ['application/json'],
          produces: [],
          parameters: [
            {
              in: 'body',
              name: 'username',
              description: 'user name ',
              required: true,
            },
            {
              in: 'body',
              name: 'fullname',
              description: 'full name of user',
              required: true,
            },
            {
              in: 'body',
              name: 'subscriptiontype',
              description: 'subscription type',
              required: true,
            },
            {
              in: 'body',
              name: 'address',
              description: 'address of user',
              required: true,
            },
            {
              in: 'body',
              name: 'city',
              description: 'city of user',
              required: true,
            },
            {
              in: 'body',
              name: 'title',
              description: 'role of user',
              required: true,
            },
            {
              in: 'body',
              name: 'region',
              description: 'region of user',
              required: true,
            },
          ],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/adduser']['post'] = {
        summary: 'Add user Data',
        description: '',
        consumes: ['application/json'],
        produces: [],
        parameters: [
          {
            in: 'body',
            name: 'username',
            description: 'user name ',
            required: true,
          },
          {
            in: 'body',
            name: 'fullname',
            description: 'full name of user',
            required: true,
          },
          {
            in: 'body',
            name: 'subscriptiontype',
            description: 'subscription type',
            required: true,
          },
          {
            in: 'body',
            name: 'address',
            description: 'address of user',
            required: true,
          },
          {
            in: 'body',
            name: 'city',
            description: 'city of user',
            required: true,
          },
          {
            in: 'body',
            name: 'title',
            description: 'role of user',
            required: true,
          },
          {
            in: 'body',
            name: 'region',
            description: 'region of user',
            required: true,
          },
        ],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/adduser`,
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
          bh = await this.adduser(bh);
          //appendnew_next_sd_fbaOvjtq45B2QNRj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fbaOvjtq45B2QNRj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getuser']) {
      this.swaggerDocument['paths']['/getuser'] = {
        get: {
          summary: 'Get All Data',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'query',
              name: 'username',
              description: 'username of user',
              required: true,
            },
          ],
          responses: { '200': { description: 'ok' } },
        },
      };
    } else {
      this.swaggerDocument['paths']['/getuser']['get'] = {
        summary: 'Get All Data',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'query',
            name: 'username',
            description: 'username of user',
            required: true,
          },
        ],
        responses: { '200': { description: 'ok' } },
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getuser`,
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
          bh = await this.sd_djKzFBcApHWF8A8O(bh);
          //appendnew_next_sd_3q3aPanY6oiHoaWw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3q3aPanY6oiHoaWw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_incidenceService_HttpIn
  }
  //   service flows_incidenceService

  //appendnew_flow_incidenceService_start

  async getdata(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_e1rsqEcXpIcH0233',
        'ima',
        bh.find,
        {}
      );
      await this.sd_cMxf3eH5yhuDkMsT(bh);
      //appendnew_next_getdata
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zihED6Hyelpls9kv');
    }
  }

  async sd_cMxf3eH5yhuDkMsT(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cMxf3eH5yhuDkMsT');
    }
  }

  async adddatta(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_e1rsqEcXpIcH0233',
        'ima',
        bh.input.body,
        {}
      );
      await this.sd_iwesMUqKdaJXl7jt(bh);
      //appendnew_next_adddatta
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vo4QBNp3SdByMR4W');
    }
  }

  async sd_iwesMUqKdaJXl7jt(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iwesMUqKdaJXl7jt');
    }
  }

  async deleterecord(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().deleteOne(
        'sd_e1rsqEcXpIcH0233',
        'ima',
        bh.input.body,
        {}
      );
      await this.sd_PYeNEQOMBRJgDUce(bh);
      //appendnew_next_deleterecord
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yYJz0wcV8NCQnSjG');
    }
  }

  async sd_PYeNEQOMBRJgDUce(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PYeNEQOMBRJgDUce');
    }
  }

  async sd_y0zUzKPjNEezO4f4(bh) {
    try {
      const ObjectID = require('mongodb').ObjectID;

      bh.local.filter = { _id: new ObjectID(bh.input.query._id) };
      bh.input.body = { $set: bh.input.body };
      bh.local.options = {
        new: true,
      };

      bh = await this.updaterecord(bh);
      //appendnew_next_sd_y0zUzKPjNEezO4f4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y0zUzKPjNEezO4f4');
    }
  }

  async updaterecord(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_e1rsqEcXpIcH0233',
        'ima',
        bh.local.filter,
        bh.input.body,
        bh.local.options
      );
      await this.sd_UzybHt4Eqw6JvpJ0(bh);
      //appendnew_next_updaterecord
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hy3BKMpjbk34b2cs');
    }
  }

  async sd_UzybHt4Eqw6JvpJ0(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UzybHt4Eqw6JvpJ0');
    }
  }

  async adduser(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_e1rsqEcXpIcH0233',
        'user',
        bh.input.body,
        {}
      );
      await this.sd_NWg95i5RvXlUq0CI(bh);
      //appendnew_next_adduser
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UrcR9TySPZWJ5buq');
    }
  }

  async sd_NWg95i5RvXlUq0CI(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NWg95i5RvXlUq0CI');
    }
  }

  async sd_djKzFBcApHWF8A8O(bh) {
    try {
      bh.local.filter = { username: bh.input.query.username };
      bh = await this.getuser(bh);
      //appendnew_next_sd_djKzFBcApHWF8A8O
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_djKzFBcApHWF8A8O');
    }
  }

  async getuser(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_e1rsqEcXpIcH0233',
        'user',
        bh.local.filter,
        {}
      );
      await this.sd_F70vahHZHwIJwlhs(bh);
      //appendnew_next_getuser
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZgJGi0wBzfqMHmiX');
    }
  }

  async sd_F70vahHZHwIJwlhs(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F70vahHZHwIJwlhs');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_incidenceService_Catch
}
