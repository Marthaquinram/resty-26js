import './results.scss';
export default function Results(props) {
  return (
    <div className='resultDiv'>

      < section className="results" >
        <pre >{props.dataFromPayload ? JSON.stringify(props.dataFromPayload, undefined, 2) : null}</pre>
      </section>
    </div>
  )
}
