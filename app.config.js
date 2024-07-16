import { createApp } from 'vinxi';

export default createApp({
    server: {experimental:{asyncContext: true}},
    routers: [
        {
            name: 'static',
            type: 'static',
            dir: './public',
            base: '/'
        },
        {
            name: 'spa',
            type: 'spa',
            handler: './index.html',
            base: '/'
        },
        {
            name: 'http',
            type: 'http',
            handler: './api/server.js',
            base: '/api/server',
            build: false
        }
    ]
});