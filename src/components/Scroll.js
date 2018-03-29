import React from 'react';

const Scroll = (props) => {
<<<<<<< HEAD
	return(
		<div style={{overflowY: 'scroll', border: '2px solid black', height: '1000px'}}>
		{props.children}
		</div>)
=======
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
>>>>>>> 90c04619523348641e276e265f3e43a7d4590622
};

export default Scroll;