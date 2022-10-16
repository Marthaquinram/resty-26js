import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const callApi = (receivingObjOnForm) => {
    setRequestParams(receivingObjOnForm);//updating/setting the state
  }
  useEffect(() => {
    async function gatherData() {
      if (requestParams.method === 'GET') {
        await axios.get(requestParams.url).then(response => {
          console.log(response);
          setData(response);
        });
      }
      if (requestParams.method === 'POST') {
        await axios.post(requestParams.url, requestParams.body).then(response => {
          console.log(response);
          setData(response);
        });
      }
      if (requestParams.method === 'PUT') {
        await axios.put(requestParams.url).then(response => {
          console.log(response);
          setData(response);
        });
      }
      if (requestParams.method === 'DELETE') {
        await axios.delete(requestParams.url).then(response => {
          console.log(response);
          setData(response);
        });
      }

    }
    gatherData();


  }, [requestParams]);



  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results dataFromPayload={data} />
      <Footer />
    </React.Fragment>
  );
}


export default App;
