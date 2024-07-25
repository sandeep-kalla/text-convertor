import PropTypes from'prop-types'
const Buttons = (props) => {
  return (
    <div>
      <button className={props.class} onClick={props.fn}>{props.name}</button>
    </div>
  )
}

Buttons.propTypes = {
    name:PropTypes.string.isRequired,
    fn:PropTypes.func.isRequired,
    class:PropTypes.string.isRequired
}

export default Buttons
