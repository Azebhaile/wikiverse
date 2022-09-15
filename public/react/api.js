let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL =  'http://localhost:3500/api';
} else {
  apiURL = '/api'
}

export default apiURL;
