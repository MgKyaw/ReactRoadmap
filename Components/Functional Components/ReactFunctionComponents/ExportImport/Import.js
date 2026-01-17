import React from 'react';

import Headline from './Headline.js';

export default () => {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
};