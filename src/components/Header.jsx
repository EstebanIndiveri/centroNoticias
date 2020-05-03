import React from 'react';
import PropTypes from 'prop-types'
const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper amber darken-4">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>
     );
}
Header.propTypes={
    titulo:PropTypes.string.isRequired
}
 
export default Header;