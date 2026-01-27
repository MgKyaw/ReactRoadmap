const Welcome = ({ title, description }) => (
  <div>
    <Title title={`Welcome to ${title || 'Earth'}`} />
    <Description description={description} />
  </div>
);

const Welcome2 = ({ title, description }) => (
  <div>
    <Title title={`Welcome to ${title || 'Earth'}`} />
    <Description description={description} />
  </div>
);

const Welcome3 = ({ title = 'Earth', description }) => (
  <div>
    <Title title={`Welcome to ${title}`} />
    <Description description={description} />
  </div>
);