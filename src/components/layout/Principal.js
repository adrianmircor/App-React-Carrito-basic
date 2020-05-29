import React, { Fragment } from 'react';
import Navigation from './Navigation'
import Board from './Board'

const Principal = () => {
    return (  
        <Fragment>
            <Navigation></Navigation>
            <Board></Board>
        </Fragment>
    );
}
 
export default Principal;