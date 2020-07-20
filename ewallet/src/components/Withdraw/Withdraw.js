import React from 'react';
import './Withdraw.css';

const Withdraw = ({onWithdrawInputChange, onWithdrawButtonSubmit}) => {
    return(
        <div>
            <p className= 'center f3'>
                {'Withdraw from Balance:'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onWithdrawInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-black' onClick={onWithdrawButtonSubmit}>Withdraw</button>
                </div>
            </div>
        </div>
    );
}

export default Withdraw;