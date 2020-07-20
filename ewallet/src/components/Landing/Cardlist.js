import React from 'react';
import Card from './Card'

const CardList = ({users}) => {
    
    const cardComponent = users.map((user, i) => {
        if (i < 49){
            return (
                <Card key={i} 
                balance={users[i].balance} 
                name={users[i].name} 
                email={users[i].email} 
                />)
        }
        return null;
    })
    return(
        <div>
            {cardComponent}
		</div>
    )
}

export default CardList;