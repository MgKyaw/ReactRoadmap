import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};

Headline.propTypes = {
  value: PropTypes.string.isRequired,
};

export default App;