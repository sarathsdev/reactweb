import React from 'react'
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function Test5() {

    const listItems = people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
          </p>
        </li>
      );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}
