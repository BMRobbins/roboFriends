import React from 'react';
import Card from './Card';

<<<<<<< HEAD
const CardList = ({robots}) => {
	
	return (<div>
				{robots.map((user, i)=> {
					return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
				
				})}
			</div>
			);
=======
const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
>>>>>>> 90c04619523348641e276e265f3e43a7d4590622
}

export default CardList;