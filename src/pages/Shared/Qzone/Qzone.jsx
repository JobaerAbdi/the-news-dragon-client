import React from 'react';
import logo1 from '../../../assets/qZone1.png'
import logo2 from '../../../assets/qZone2.png'
import logo3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='mt-4'>
            <h3>Q-Zone</h3>
            <div>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;