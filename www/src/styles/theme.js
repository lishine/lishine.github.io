import React from 'react'
import { theme as chakraTheme } from '@chakra-ui/core'

console.log('------------chakraTheme', JSON.stringify(chakraTheme, null, 2))

const breakpoints = ['768px', '1024px', '1440px']

export const theme = {
    // ...chakraTheme,
    breakpointsObject: {
        sm: 0,
        md: breakpoints[0],
        lg: breakpoints[1],
        xl: breakpoints[2],
    },
    breakpointsList: ['md', 'lg', 'xl'],
    breakpoints,
    radii: [0, '3px'],
    space: [...Array(30).keys()].map(n => n * 8),
    // colors: {
    //     ...chakraTheme.colors,
    //     // primary: 'rgb(253, 194, 1)',
    //     // 'primary-1': 'E6B000',
    //     // 'primary-2': 'FECF33',
    //     // secondary: '(25, 25, 25)',
    //     // 'secondary-1': '2B2B2B',
    //     // 'secondary-2': '979797',
    //     tertiary: '(0, 204, 204)',
    //     // success: '(0, 204, 0)',
    //     // warning: '(254, 207, 51)',
    //     // danger: '(252, 0, 0)',
    //     // link: 'var(--link)',
    //     // 'dark-normal': 'var(--dark-normal)',
    //     // 'dark-muted': 'var(--dark-muted)',
    //     // 'dark-disabled': 'var(--dark-disabled)',
    //     // 'dark-border': 'var(--dark-border)',
    //     // 'light-normal': 'var(--light-normal)',
    //     // 'light-muted': 'var(--light-muted)',
    //     // 'light-disabled': 'var(--light-disabled)',
    //     // 'light-border': 'var(--light-border)',
    //     // 'onwhite-normal': 'var(--onwhite-normal)',
    //     // 'onwhite-menu': 'var(--onwhite-menu)',
    //     // 'onwhite-muted': 'var(--onwhite-muted)',
    //     // 'onwhite-disabled': 'var(--onwhite-disabled)',
    //     'onwhite-border': 'rgba(0, 0, 0, 0.11)',
    // },
    // fonts: {
    //     ...chakraTheme.fonts,
    //     body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    // },
    // fontWeights: {
    //     normal: 400,
    //     medium: 600,
    //     bold: 700,
    // },
    // icons: {
    //     ...chakraTheme.icons,
    //     twitter: {
    //         path: (
    //             <g
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             >
    //                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    //             </g>
    //         ),
    //     },
    //     github: {
    //         path: (
    //             <g
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             >
    //                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    //             </g>
    //         ),
    //     },
    //     linkedin: {
    //         path: (
    //             <g
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             >
    //                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //                 <rect x="2" y="9" width="4" height="12" />
    //                 <circle cx="4" cy="4" r="2" />
    //             </g>
    //         ),
    //     },
    //     mail: {
    //         path: (
    //             <g
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             >
    //                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    //                 <polyline points="22,6 12,13 2,6" />
    //             </g>
    //         ),
    //     },
    // },
}
