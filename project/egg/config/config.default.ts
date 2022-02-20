import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_090450_8976';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const mysqlConfig = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'bingketang-database'
      },
      app: true,
      agent: false
    }
  };

  const corsConfig = {
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: ['http://localhost:3000'],
    },
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  };

  const socketioConfig = {
    io: {
      init: {},
      namespace: {
        '/': {
          connectionMiddleware: ['auth']
        }
      }
    }
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...mysqlConfig,
    ...corsConfig,
    ...socketioConfig
  };
};
