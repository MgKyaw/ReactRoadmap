function Message({ isExtrovert, isVegetarian }) {
  const key = `${isExtrovert}-${isVegetarian}`;

  return (
    <div>
      {
        {
          'true-true': <p>I am an extroverted vegetarian.</p>,
          'true-false': <p>I am an extroverted meat eater.</p>,
          'false-true': <p>I am an introverted vegetarian.</p>,
          'false-false': <p>I am an introverted meat eater.</p>,
        }[key]
      }
    </div>
  );
}