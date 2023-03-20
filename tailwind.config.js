/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html, js}"],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            colors: {
                'yellow': {
                    600: '#C5A901',
                    700: '#8C7800',

                    900: '#111111',
                },
            },
            fontFamily: {
                'garamond': ['Garamond', 'serif']
            },
            fontSize: {
                '4.5xl': ['2.5rem', {
                    lineHeight: '2.5rem;',
                }],


                '2.5xl': ['1.75rem', {
                    lineHeight: '2rem;',
                }],
            }
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    margin: '0 auto',
                    maxWidth: '80rem',
                    padding: '0 1rem',
                    '@screen sm': {
                        padding: '0 1.5rem'
                        //maxWidth: '600px',
                    },
                    '@screen md': {
                       // maxWidth: '700px',
                    },
                    '@screen lg': {
                        padding: '0 2rem'
                       // maxWidth: '800px',
                    },
                    '@screen xl': {
                        //maxWidth: '900px',
                    },
                }
            })
        },
    ]
}