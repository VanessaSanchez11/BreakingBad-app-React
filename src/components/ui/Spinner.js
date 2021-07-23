import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img src={spinner}
        id="spinner-id"
        data-testid="spinner-data"
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt='Loading'/>
    )
}

export default Spinner
