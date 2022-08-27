import React from 'react';
import Card from './Card';


const Cardlist = ({frischs})=>{
    return(
        <div>
            {
                frischs.map((frisch,i)=> {
                    return (
                        <Card 
                            key={frischs[i].id}
                            id={frischs[i].id}
                            name={frischs[i].name}
                            email={frischs[i].email}
                            />
                    );
                })
            }
        </div>
    )
}

export default Cardlist;