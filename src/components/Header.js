import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    let color = 'black';
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={color} text={showAdd ? 'Close Form' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

// this is for default props
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// using inline styling (CSS in JS)
// const headerStyle = {
//     color: 'blue',
//     backgroundColor: 'grey',
// }

export default Header
