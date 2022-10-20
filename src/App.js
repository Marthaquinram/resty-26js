// import './App.scss';
import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import axios from 'axios';
import History from './components/form/history/history';

const history = [];

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const callApi = (receivingObjOnForm) => {
    history.push(receivingObjOnForm.url); // pushes url to history array
    console.log('hey WHERE ARE YOU', receivingObjOnForm);
    setRequestParams(receivingObjOnForm);//updating/setting the state
  }


  useEffect(() => {
    async function gatherData() {
      if (requestParams.method === 'GET') {
        await axios.get(requestParams.url).then(response => {
          console.log('HEY IM THE RESPONSEEEEEEEE', response);
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
      <History trackHistory={history} />
      <Footer />
    </React.Fragment>
  );
}


export default App;
