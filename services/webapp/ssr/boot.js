import { createHookApp } from '@forrestjs/hooks'
import path from 'path'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default createHookApp({
    trace: true,
    settings: async ({ setConfig, getEnv }) => {
        setConfig('postgres.connections', [{
            host: getEnv('PG_HOST'),
            port: getEnv('PG_PORT'),
            database: getEnv('PG_DATABASE'),
            username: getEnv('PG_USERNAME'),
            password: getEnv('PG_PASSWORD'),
            maxAttempts: Number(getEnv('PG_MAX_CONN_ATTEMPTS', 25)),
            attemptDelay: Number(getEnv('PG_CONN_ATTEMPTS_DELAY', 5000)),
            pool: { max: 2, min: 0, acquire: 30000, idle: 10000 },
            models: [],
        }])

        setConfig('jwt', {
            secret: getEnv('JWT_SECRET'),
            duration: getEnv('JWT_DURATION'),
        })

        // setConfig('express.session.duration', '30d')

        // setConfig('expressSSR.enabled', 'no')


        // console.log('>>> build', process.env.REACT_SSR_BUILD)
        // console.log('>>> src', process.env.REACT_SSR_BUILD_SRC)
        // setConfig('expressSSR.enabled', 'no')

        // setConfig('hash', {
        //     rounds: Number(getEnv('BCRYPT_ROUNDS')),
        // })

        // setConfig('express.session.autoStart', false)
        // setConfig('express.session.autoExtend', false)
        // setConfig('express.session.duration', '5s')
        // setConfig('express.device.setCookie', false)
        // setConfig('express.session.setCookie', false)
        // setConfig('express.session.setHeader', true)
        // setConfig('express.session.autoValidate', true)
    },
    services: [
        require('@forrestjs/service-env'),
        require('@forrestjs/service-logger'),
        require('@forrestjs/service-jwt'),
        require('@forrestjs/service-hash'),
        require('@forrestjs/service-postgres'),
        // require('@forrestjs/service-postgres-pubsub'),
        require('@forrestjs/service-express'),
        require('@forrestjs/service-express-graphql'),
        require('@forrestjs/service-express-graphql-test'),

        // In order to catch the graphql query
        // [ '$EXPRESS_MIDDLEWARE', ({ registerMiddleware }) => {
        //     registerMiddleware(require('body-parser').json())
        //     registerMiddleware(require('body-parser').urlencoded({ extended: true }))
        // } ],

        // require('@forrestjs/service-express-cookies'),
        // require('@forrestjs/service-express-request'),
        // require('@forrestjs/service-express-device'),
        // require('@forrestjs/service-express-session'),

        require('@forrestjs/service-express-ssr'),
        require('@forrestjs/feature-locale'),
    ],
    features: [
        // require('./features/graphql-version'),

        // require('@forrestjs/feature-pg-session'),
        // require('@forrestjs/feature-pg-session-info'),
        // require('./features/feature-pg-session-history'),
        // require('@forrestjs/feature-pg-auth'),
        // require('./features/feature-passport'),
        // require('./features/feature-journal'),
    ],
})
