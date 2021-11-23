import React, {useEffect, useState} from "react";

let HELLO_API;

if (process.env.NODE_ENV === 'development') {
  HELLO_API = 'http://localhost:4000/hello';
}
else {
  HELLO_API = 'https://web-dev-2021.herokuapp.com/';
}

const HelloApiClient = () => {
  const [hello, setHello] = useState('');
  useEffect(() => {
    fetch(HELLO_API)  // send an HTTP request to this url
    .then(response => response.text())      // parse the text in the HTTP response to this server
    .then(text => setHello(text));        // set hello to the text received from server 
  }, []);
  return (
      <h1>{hello}</h1>
  );
};
export default HelloApiClient;
