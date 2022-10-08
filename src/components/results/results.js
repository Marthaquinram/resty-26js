export default function Results(props) {
  return (
    < section >
      <pre>{props.dataFromPayload ? JSON.stringify(props.dataFromPayload, undefined, 2) : null}</pre>
    </section>
  )
}
