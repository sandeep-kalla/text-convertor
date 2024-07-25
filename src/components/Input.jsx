import PropTypes from 'prop-types'
const Input = (props) => {
  return (
    <div>
      <input className={props.class} type="text" placeholder="enter your name" onChange={props.fn}/>
    </div>
  )
}

Input.propTypes = {
  class:PropTypes.string.isRequired,
  fn:PropTypes.func.isRequired
}
export default Input
