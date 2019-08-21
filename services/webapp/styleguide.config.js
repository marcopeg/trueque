const path = require('path')

module.exports = {
    /**
     * Include all the (almost) pure component examples here:
     */
    sections: [
        {
            name: 'Atoms',
            description: 'Basic UI components',
            components: [
                'src/components/atoms/Text/Text.jsx',
                'src/components/atoms/Button/Button.jsx',
            ],
        },
        {
            name: 'Molecules',
            description: 'Composition of components',
            components: [
                'src/components/molecules/Card/Card.jsx',
                'src/components/molecules/Header/Header.jsx',
            ],
            // sections: [
            //     {
            //         name: 'features/locale',
            //         components: [
            //             'src/features/locale/LocaleSelectorUI.js',
            //         ],
            //     },
            // ],
        },
    ],

    /**
     * Customize the styleguide appearance.
     */
    styles: {
        Section: {
            root: {
                marginBottom: '15vh',
            },
        },
    },

    /**
     * Inject utility components into the Styleguide context
     * this is really useful for providing a component with
     * some sort of state or routing capabilities
     */
    context: {
        ContextProvider: path.join(__dirname, 'src/lib/ContextProvider'),
    },

    /**
     * Inject the default CSS.
     * You may need to add more of those, but it's likely that you will
     * prefer to go the `styled-components` way.
     */
    require: [
        path.join(__dirname, 'src/index.scss'),
    ],

    /**
     * CRA provides a fully functioning webpack config that is good for
     * the `/components` folder but doesn't work in any other context
     * out of the box!
     *
     * The trick is to simply provide this configuration back to Styleguidist.
     */
    webpackConfig: require('react-scripts-rewired/config/webpack.config.dev.extend'),
}
