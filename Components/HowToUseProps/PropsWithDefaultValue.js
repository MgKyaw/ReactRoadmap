const Welcome = ({ title, description }) => {
  title = title || 'Earth';

  return (
    <div>
      <Title title={`Welcome to ${title}`} />
      <Description description={description} />
    </div>
  );
};