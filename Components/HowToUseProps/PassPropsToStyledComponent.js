// import styled from 'styled-components';

// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: palevioletred;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// const App = () => {
//   const [value, setValue] = React.useState('');

//   const onChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <Input
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: ${props => props.hasRadius ? '3px' : '0px'};
`;

const App = () => {
  const [value, setValue] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <Input
        value={value}
        onChange={onChange}
        hasRadius={true}
      />
    </div>
  );
}