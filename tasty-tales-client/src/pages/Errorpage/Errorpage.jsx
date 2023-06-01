import React from 'react';
import error from '../../assets/404.jpg'

const Errorpage = () => {
    return (
        <div className='container'>
            <img src={error} alt="" />
        </div>
    );
};

export default Errorpage;