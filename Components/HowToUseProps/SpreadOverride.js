const Welcome = (props) => {
  return (
    <div>
      <Message {...props} title="JavaScript" />
    </div>
  );
};

// Message prints title "JavaScript"

const Welcome2 = (props) => {
  return (
    <div>
      <Message title="JavaScript" {...props} />
    </div>
  );
};

// Message prints title "React"