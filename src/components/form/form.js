// import React from 'react';
import './form.scss';
import React, { useState } from 'react';


export default function Form(props) {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState({});


  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,//these are dynamically update state properties
      url: url,//these are dynamically update state properties
      body: body,
    };

    props.handleApiCall(formData);
  }

  const onChangeMethod = e => {
    e.preventDefault();
    setMethod(e.target.value);
    console.log("HEY THIS IS METHOD UPDATE", method);
  }
  const onUrlChange = e => {
    e.preventDefault();
    setUrl(e.target.value);
    console.log("HEY URL IM UPDATING YOU", url);
  }
  const onBodyChange = e => {
    e.preventDefault();
    setBody(e.target.value);
    console.log("HEY BODY", body);
  }



  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e) => onUrlChange(e)} />
            <button type="submit">GO!</button>
          </label>
          <div className="methods">
            <button id="get" onClick={(e) => onChangeMethod(e)} value='GET'>GET</button>
            <button id="post" onClick={(e) => onChangeMethod(e)} value='POST'>POST</button>
            <button id="put" onClick={(e) => onChangeMethod(e)} value='PUT'>PUT</button>
            <button id="delete" onClick={(e) => onChangeMethod(e)} value='DELETE'>DELETE</button>
          </div>
          <div className='text-container'>
            {method === 'POST' ?
              <textarea name='textarea' onChange={(e) => onBodyChange(e)} rows={5} cols={70} minLength={1} maxLength={600} placeholder='json body here...' /> : null
            }
          </div>
        </div>
      </form>
    </>
  )
};
