import React from 'react';


const Balance = ({name, balance}) => {
    return(
        <div className='center'>
            <div className='white f3'>
                {`${name}, Your current Balance is...`}
            </div>
            <div className='white f3'>
                {balance}
            </div>
        </div>
    );
}

export default Balance;