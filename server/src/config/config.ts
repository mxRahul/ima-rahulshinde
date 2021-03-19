export default {
  logger: {
    level: 'debug',
    logFile: 'logs/console.log',
    exceptionFile: 'logs/exception.log',
    transport: ['file', 'console'],
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'PzqbFV_qli6dcK9V-Wwq0',
    client_secret:
      'QzNtKtheVyGxfFr2oKITeyMdcd4zRIzkTEcPy4KZ00t_dRXIr_e9xg9F2gMlEzDvTBq2tB0ENwK0JkfMbAbOiA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
