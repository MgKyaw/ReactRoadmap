const Welcome = ({ title, description }) => (
  <div>
    <Title title={`Welcome to ${title || 'Earth'}`} />
    <Description description={description} />
  </div>
);