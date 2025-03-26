/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'all': 'all', // ✅ supaya bisa pakai class "transition-all"
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // mulai dari bawah dengan opacity 0
          '100%': { opacity: '1', transform: 'translateY(0)' },  // muncul ke atas dan opacity 1
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' }, // dari kiri
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' }, // dari kanan
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' }, // kecil & transparan
          '100%': { opacity: '1', transform: 'scale(1)' }, // normal size
        },
        // ✅ Tambahan untuk delay animasi berurutan (stagger effect)
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' }, // dari bawah
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out', // ✅ animasi muncul pelan dari bawah
        'slide-in-left': 'slide-in-left 0.8s ease-out', // ✅ masuk dari kiri
        'slide-in-right': 'slide-in-right 0.8s ease-out', // ✅ masuk dari kanan
        'zoom-in': 'zoom-in 0.8s ease-out', // ✅ zoom muncul
        'fade-in-up': 'fade-in-up 0.8s ease-out', // ✅ muncul dari bawah (khusus logo grid bisa pakai ini)
      },
    },
  },
  plugins: [],
}
