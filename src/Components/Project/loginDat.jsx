/** 
 * //const clientId = '786066878087-jgnsj8gl3p61sljp3pbbuotj9iremar0.apps.googleusercontent.com';
const clientId = '180781809859-q0qjq0qjq0qjq0qjq0qjq0qjq0qjq0qj.apps.googleusercontent.com';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
 * 
 * 
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      };
  
      gapi.load('client:auth2', start);
    });
  
    var accessToken = localStorage.getItem('accessToken');
  */
