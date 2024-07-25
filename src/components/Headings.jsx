const headings = (props) => {
  return (
    <div>
      <h1 className={props.class} style={{backgroundColor:props.color}}>{props.text}</h1>
    </div>
  )
}

export default headings
