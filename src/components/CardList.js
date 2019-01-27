import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');
  return (
    <div>
      {robots.map((user, i) => (
        <Card key={i} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default CardList;
