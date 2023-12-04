import React from 'react';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';

function App() {
  return (
    <>
      <Paragraph paragraph='one piece é incrível 🏴‍☠️' textColor='red' />
                           {/* É possível mudar cor do parágrago 👆 */}
      <Button label="Baixar todas temporadas de One Piece" />
    </>
  );
}
export default App;
