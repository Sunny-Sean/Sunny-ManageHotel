import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
 
&.light-mode {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Slate */
--color-slate-50: #f8fafc;
--color-slate-100: #f1f5f9;
--color-slate-200: #e2e8f0;
--color-slate-300: #cbd5e1;
--color-slate-400: #94a3b8;
--color-slate-500: #64748b;
--color-slate-600: #475569;
--color-slate-700: #334155;
--color-slate-800: #1e293b;
--color-slate-900: #0f172a;
--color-slate-950: #020617;

/* Cyan */
--color-cyan-50: #ecfeff;
--color-cyan-100: #cffafe;
--color-cyan-200: #a5f3fc;
--color-cyan-300: #67e8f9;
--color-cyan-400: #22d3ee;
--color-cyan-500: #06b6d4;
--color-cyan-600: #0891b2;
--color-cyan-700: #0e7490;
--color-cyan-800: #155e75;
--color-cyan-900: #164e63;
--color-cyan-950: #083344;

/* Sky */
--color-sky-50: #f0f9ff;
--color-sky-100: #e0f2fe;
--color-sky-200: #bae6fd;
--color-sky-300: #7dd3fc;
--color-sky-400: #38bdf8;
--color-sky-500: #0ea5e9;
--color-sky-600: #0284c7;
--color-sky-700: #0369a1;
--color-sky-800: #075985;
--color-sky-900: #0c4a6e;
--color-sky-950: #082f49;


  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;



  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}

  &.dark-mode {
    --color-brand-50: #cad2e7;
--color-brand-200: #9a9fcb;
--color-brand-500: #40437c;
--color-brand-600: #352f64;
--color-brand-800: #26223c;
--color-brand-900: #1f1e2e;

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-slate-50: #edf0f3;
--color-slate-100: #d9e2eb;
--color-slate-200: #b9c8d5;
--color-slate-300: #97a3b5;
--color-slate-400: #6b7e96;
--color-slate-500: #3d4d64;
--color-slate-600: #2c394b;
--color-slate-700: #1e2838;
--color-slate-800: #111b29;
--color-slate-900: #060c19;
--color-slate-950: #00030a;

--color-cyan-50: #d7f8fa;
--color-cyan-100: #a4f3f9;
--color-cyan-200: #6ddce8;
--color-cyan-300: #2dbbda;
--color-cyan-400: #129dbd;
--color-cyan-500: #0a7a95;
--color-cyan-600: #0b5b75;
--color-cyan-700: #0a4656;
--color-cyan-800: #083640;
--color-cyan-900: #052831;
--color-cyan-950: #021b22;

--color-sky-50: #caeaff;
--color-sky-100: #a1d8fe;
--color-sky-200: #6daeeb;
--color-sky-300: #3974d9;
--color-sky-400: #0f4fae;
--color-sky-500: #064b8b;
--color-sky-600: #033b69;
--color-sky-700: #032b4c;
--color-sky-800: #022038;
--color-sky-900: #011528;
--color-sky-950: #010d18;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }

   /* Indigo */
   --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Tạo animations cho dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

img::-webkit-scrollbar {
  display: none;
}


.none-scroll::-webkit-scrollbar {
  display: none;
}


/*
FOR DARK MODE

--color-brand-50: #cad2e7;
--color-brand-200: #9a9fcb;
--color-brand-500: #40437c;
--color-brand-600: #352f64;
--color-brand-800: #26223c;
--color-brand-900: #1f1e2e;

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-slate-50: #edf0f3;
--color-slate-100: #d9e2eb;
--color-slate-200: #b9c8d5;
--color-slate-300: #97a3b5;
--color-slate-400: #6b7e96;
--color-slate-500: #3d4d64;
--color-slate-600: #2c394b;
--color-slate-700: #1e2838;
--color-slate-800: #111b29;
--color-slate-900: #060c19;
--color-slate-950: #00030a;

--color-cyan-50: #d7f8fa;
--color-cyan-100: #a4f3f9;
--color-cyan-200: #6ddce8;
--color-cyan-300: #2dbbda;
--color-cyan-400: #129dbd;
--color-cyan-500: #0a7a95;
--color-cyan-600: #0b5b75;
--color-cyan-700: #0a4656;
--color-cyan-800: #083640;
--color-cyan-900: #052831;
--color-cyan-950: #021b22;

--color-sky-50: #caeaff;
--color-sky-100: #a1d8fe;
--color-sky-200: #6daeeb;
--color-sky-300: #3974d9;
--color-sky-400: #0f4fae;
--color-sky-500: #064b8b;
--color-sky-600: #033b69;
--color-sky-700: #032b4c;
--color-sky-800: #022038;
--color-sky-900: #011528;
--color-sky-950: #010d18;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/

/*
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Sono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
*/

/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */


`;

export default GlobalStyles;
