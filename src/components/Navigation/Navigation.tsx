import React from 'react';

import "./Navigation.scss"

export type NavigationType = {
  name?: string;
}

const Navigation: React.FC<NavigationType> = ({ name }) => {
  return (
    <header className='top-nav'>
      hello123
    </header>
  );
};

export default Navigation;
