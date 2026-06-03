import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const expensiveResult = useMemo(() => {
    // Perform expensive computation here
  }, [data]);

  return <div>{expensiveResult}</div>;
}

export default ExpensiveComponent;