import React from 'react';

const SearchBar = ({onNameInputChange, onBalanceInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className= 'center f3'>
                {'Search through the users by using the search bar. Search Result will not exceed 50'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <p className='white' >Input Name</p>
                    <input className='f4 pa2 w-50 input-reset ba bg-transparent hover-bg-black hover-white center' type='text' onChange={onNameInputChange} />
                    <p style={{paddingLeft:'20px'}} className='white'>Input Balance</p>
                    <input className='f4 pa2 w-50 input-reset ba bg-transparent hover-bg-black hover-white center' type='text' onChange={onBalanceInputChange} />
                    <button className='w-30 grow f4 link ph2 bw2 pv2 dib white bg-black' onClick={onButtonSubmit}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;