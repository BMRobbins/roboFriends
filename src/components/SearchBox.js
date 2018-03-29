import React from 'react';

<<<<<<< HEAD

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		<input  className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={searchChange} />
		</div>
		);
		
=======
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
>>>>>>> 90c04619523348641e276e265f3e43a7d4590622
}

export default SearchBox;