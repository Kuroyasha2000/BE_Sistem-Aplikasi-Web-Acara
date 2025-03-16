import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v0.0.1',
    title: 'Dokumentasi Test API SAA',
    description: 'Dokumentasi Test API SAA ',
  },

  servers: [
    {
      url: ' http://localhost:3000/api',
      description: 'Local Server',
    },
    {
      url: 'https://be-sistem-aplikasi-web-acara.vercel.app/api',
      description: 'Production Server',
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemes: {
      LoginRequest: {
        identifier: 'Kuroyasha',
        password: '123456789',
      },
    },
  },
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['../routes/api.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
