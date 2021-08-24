module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'PRODUCTION' ? true : false,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        divideWidth: {
            DEFAULT: '3px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
            8: '8px',
        },
        extend: {
            colors: {
                'regal-blue': '#101940',
            },
            fontFamily: {
                OpenSans: ['OpenSans'],
            },
            spacing: {
                120: '29rem',
                128: '32rem',
                144: '36rem',
                192: '48rem',
            },
        },
    },
    variants: {
        extend: {},
    },
}
