require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

export default {
    dev: !isProduction,

    ssr: false,

    // When SPA
    loading: '@/components/shared/Loading.vue',

    // When SSR
    loadingIndicator: {
        name: 'folding-cube',
        color: '#336CCE',
    },

    head: {
        title: 'ezi-hotel',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@9.1.1/modules/scrollbar/scrollbar.min.css' },
        ],
        script: [
            { src: 'scripts/popper.min.js' },
            { src: 'scripts/bootstrap.min.js' },
            {
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/swiper@9.1.1/swiper-bundle.min.js',
                type: 'text/javascript',
            },
        ],
    },
    css: [
        '@/assets/main.scss',
        '@/assets/custom.scss',
        '@/assets/ant/main.less',
        '@fortawesome/fontawesome-free/css/all.css',
    ],

    plugins: [
        '@/plugins/api',
        { src: '@/plugins/axios', mode: 'client' },
        '@/plugins/ant-design',
        '@/plugins/filters',
        '@/plugins/global-components',
        { src: '@/plugins/scripts/appear', ssr: false },
        // { src: '@/plugins/scripts/select2', ssr: false },
        { src: '@/plugins/scripts/jquery.fancybox', ssr: false },
        { src: '@/plugins/scripts/main-slider-script', ssr: false },
        { src: '@/plugins/scripts/owl', ssr: false },
        // { src: '@/plugins/scripts/swiper.min', ssr: false },
        { src: '@/plugins/scripts/wow', ssr: false },
        // { src: '@/plugins/scripts/script', ssr: false },
    ],

    robots: [
        {
            UserAgent: '*',
            Disallow: process.env.APP_ENV === 'production'
                ? [
                    '/*.json',
                    '/*.xml',
                ]
                : '/',
        },
    ],

    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '3000',
    },

    render: {
        http2: {
            push: true,
        },
    },

    buildModules: [
        '@nuxt/postcss8',
        // '@nuxtjs/eslint-module',
        '@nuxtjs/fontawesome',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics',
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],

    axios: {
        baseURL: process.env.API_HOST,
    },

    // auth: {
    //     strategies: {
    //         local: {
    //             token: {
    //                 property: 'data.sid',
    //                 global: true,
    //                 required: true,
    //                 name: 'auth',
    //                 maxAge: 60 * 60 * 24 * 30,
    //                 type: false,
    //             },
    //             autoLogout: false,
    //             user: {
    //                 property: 'data.account',
    //                 autoFetch: true,
    //             },
    //             endpoints: {
    //                 login: {
    //                     url: `${process.env.API_HOST}/user/login`,
    //                     method: 'POST',
    //                 },
    //                 logout: {
    //                     url: `${process.env.API_HOST}/user/logout`,
    //                     method: 'GET',
    //                 },
    //                 user: {
    //                     url: `${process.env.API_HOST}/user/get_profile`,
    //                     method: 'POST',
    //                 },
    //             },
    //             redirect: {
    //                 login: '/login',
    //                 logout: '/',
    //                 callback: '/login',
    //                 home: '/',
    //             },
    //         },
    //     },
    // },

    // router: {
    //     middleware: ['auth'],
    // },

    build: {
        postcss: {
            plugins: {
                tailwindcss: 'tailwind.config.js',
                autoprefixer: {},
                ...(process.env.APP_ENV === 'production' ? { cssnano: {} } : {}),
            },
        },
        loaders: {
            less: {
                javascriptEnabled: true,
            },
        },
        babel: {
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'ant-design-vue',
                        libraryDirectory: 'es',
                        style: true,
                    },
                    'ant-design-vue',
                ],
            ],
        },
    },

    publicRuntimeConfig: {
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },

    env: {
        API_HOST: process.env.API_HOST || 'localhost',
        RSA_PUBLIC_KEY: process.env.RSA_PUBLIC_KEY,
    },
};
