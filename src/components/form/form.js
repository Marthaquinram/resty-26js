// import React from 'react';
import './form.scss';
import React, { useReducer } from 'react';

const initialApiState = {
  method: '',
  url: '',
  body: {},
};

function reducer(state, action) {
  console.log('hey im STATE', state);
  console.log('hey im ACTION', action);
  switch (action.type) {
    case 'method':
      return initialApiState.method = action.method;
    case 'url':
      return initialApiState.url = action.url;
    case 'body':
      return initialApiState.body = action.body;
    default:
      throw new Error();
  }
}
export default function Form(props) {
  const [state, dispatch] = useReducer(reducer, initialApiState);

  console.log('YOOO', state);
  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      method: initialApiState.method,//these are dynamically update state properties
      url: initialApiState.url,//these are dynamically update state properties
      body: initialApiState.body,
    };

    props.handleApiCall(formData);
  }

  const onChangeMethod = e => {
    e.preventDefault();
    dispatch({ type: 'method', method: e.target.value });
    console.log("HEY THIS IS METHOD UPDATE", initialApiState.method);
  }
  const onUrlChange = e => {
    e.preventDefault();
    dispatch({ type: 'url', url: e.target.value });
    console.log("HEY URL IM UPDATING YOU", initialApiState.url);
  }
  const onBodyChange = e => {
    e.preventDefault();
    dispatch({ type: 'body', body: e.target.value });
    console.log("HEY BODY", initialApiState.body);
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
            {initialApiState.method === 'POST' ?
              <textarea name='textarea' onChange={(e) => onBodyChange(e)} rows={5} cols={70} minLength={1} maxLength={600} placeholder='json body here...' /> : null
            }
          </div>
        </div>
      </form>
    </>
  )
};
