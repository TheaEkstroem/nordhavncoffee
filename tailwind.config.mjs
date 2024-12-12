/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
            transparent: "transparent",
            current: "currentColor",
            blue: {
              50: "#F0F2F5",
              100: "#DDE1E9",
              200: "#BEC7D4",
              300: "#9DA9BE",
              400: "#7B8AA6",
              500: "#5E718F",
              600: "#4B5971",
              700: "#394456",
              800: "#272E3A",
              900: "#12161B",
              950: "#0A0C0F",
            },
            purple: {
                50: "#FCFCFD",
                100: "#F7F5FA",
                200: "#F2EEF7",
                300: "#E9E4F2",
                400: "#E3DDEE",
                500: "#DBD2E9",
                600: "#AB98CD",
                700: "#795BAF",
                800: "#503B78",
                900: "#271C3A",
                950: "#150F1F",
              },
              yellow: {
                50: "#FDFCF2",
                100: "#FBF9E8",
                200: "#F7F2D0",
                300: "#F3ECBA",
                400: "#EFE59F",
                500: "#EBE089",
                600: "#E0CE48",
                700: "#C0AD20",
                800: "#7E7214",
                900: "#413B0B",
                950: "#1E1C05",
              },
              rosa: {
                50: "#F3EDEE",
                100: "#E4D8DB",
                200: "#C9AFB7",
                300: "#AF8793",
                400: "#936270",
                500: "#6C4852",
                600: "#563941",
                700: "#402B31",
                800: "#2B1D21",
                900: "#150E10",
                950: "#0C0809",
              },
              beige: {
                50: "#FFFFFF",
                100: "#FDFDFC",
                200: "#FBFBF8",
                300: "#FAF8F5",
                400: "#F8F6F2",
                500: "#F7F5F1",
                600: "#D4CAAF",
                700: "#B3A070",
                800: "#7E6E43",
                900: "#3F3722",
                950: "#211D12",
              },
            },

    // 'white': '#fff',
    //   'black': '#000',
     //   },

         /* Tilføj din egen spacing nedenfor */
       /* Tilføj din egen spacing nedenfor */
    spacing: {
        xxxs: "4px",
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "56px",
        xl: "64px",
        "2xl": "72px",
        "3xl": "80px",
        "4xl": "88px",
        "5xl": "96px",
        "6xl": "104px",
        "7xl": "112px",
        "8xl": "120px",
        "9xl": "128px",
        "10xl": "136px",
      },
        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        fontFamily: {
            futura: ['futura-pt', 'sans-serif'], 
            geologica: ['Geologica', 'sans-serif'], },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            3: "3px",
            4: "4px",
          },


        /* Border radius størrelser herunder */
       borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        sm: "5px",
        md: "10px",
        lg: "20px",
        full: "100px",
      },

        /* Box shadows herunder */
        boxShadow: {
      drop25:
        "4px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop50:
        "4px 4px 4px 0 rgb(0 0 0 / 0.50)" /* x y blur spread farve / opacity */,
      inner25:
        "0px 4px 4px 0 rgb(0 0 0 / 0.25)/inset" /* x y blur spread farve / opacity */,
      inner50:
        "0px 4px 4px 0 rgb(0 0 0 / 0.50)/inset" /* x y blur spread farve / opacity */,
    },

		extend: {

        /* Tilføj din egen farvepalette nedenfor */
        // colors: {
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     'farvenavn': {
        //         50: '#hexkode',     
        //         100: '#hexkode',
        //         200: '#hexkode',
        //         300: '#hexkode',
        //         400: '#hexkode',
        //         500: '#hexkode',
        //         600: '#hexkode',
        //         700: '#hexkode',
        //         800: '#hexkode',
        //         900: '#hexkode',
        //     },
        //     'white': '#fff',
        //     'black': '#000',
        // },

         /* Tilføj din egen spacing nedenfor */
        // spacing: {
        //     'm': '40px',
        // },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },

        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}