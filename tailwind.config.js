export default {
  content: ['./src/**/*.{html,js}'], // adjust as needed
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // blue-500
        secondary: '#10B981' // green-500
      },
      backgroundImage: {
        'contact-banner': 'url("https://readdy.ai/api/search-image?query=Modern%20minimalist%20office%20interior%20with%20clean%20white%20walls%2C%20soft%20natural%20lighting%2C%20professional%20workspace%20atmosphere%2C%20subtle%20geometric%20patterns%2C%20contemporary%20design%20elements%2C%20peaceful%20and%20welcoming%20environment%2C%20high-end%20corporate%20setting%20with%20elegant%20furniture%2C%20spacious%20layout%20with%20glass%20elements%2C%20refined%20business%20ambiance&width=1920&height=600&seq=contact-hero-bg&orientation=landscape")',

        'about-banner': 'url("https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20student%20accommodation%20buildings%2C%20bright%20natural%20lighting%2C%20clean%20architecture%2C%20students%20walking%20around%2C%20green%20spaces%2C%20professional%20photography%20style%2C%20contemporary%20design%2C%20welcoming%20atmosphere%2C%20blue%20sky%20background&width=1920&height=800&seq=hero002&orientation=landscape")',
      },
    },
  },
  
  plugins: [],
}