/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins' : ['Nunito', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif']
      },

      color: {
        'flips' : '#ebe8e5',
        'bgs' : '#072d5b',
      },

      spacing: {
        '60rem': '60rem', // Replace with your desired value
        '61rem': '61rem',
        '67rem': '67rem',
        '59rem': '59rem',


        '43rem': '43rem' ,  

        '27rem': '27rem' 
      },

      width: {
        '80': '120vw',
        '100' : '120vw',
        '60': '58%',
        '66': '60%',
        '30' : '30rem',
        '18' : '20rem',
      },

      height: {
        '95' : '95rem',
        '42' : '42rem',
        '50' : '50rem',
        '59' : '59rem',


      },

     

    },
  },
  plugins: [],
}


