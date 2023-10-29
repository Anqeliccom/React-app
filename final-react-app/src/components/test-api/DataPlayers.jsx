import React from 'react';

export default function DataPlayers({players}){
    return(
        <div>
            {players.map((el,index)=>{
                const lastname = el.last_name;
                const firstname = el.first_name;
                return <div className="players">
                    {index+1}. {firstname} {lastname}
                </div>
            })}
        </div>
    )
}