import React, {useEffect, useState} from "react";
const HelloApiClient = () => {
  const [hello, setHello] = useState('');
  useEffect(() => {
    fetch('https://web-dev-2021.herokuapp.com/hello')  // send an HTTP request to this url
    .then(response => response.text())      // parse the text in the HTTP response to this server
    .then(text => setHello(text));        // set hello to the text received from server 
  }, []);
  return (
      <h1>{hello}</h1>
  );
};
export default HelloApiClient;
