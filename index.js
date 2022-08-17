
import { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {BigButton, SmallButton} from './another-file';

 function App() {
  return (
    <div>
      <BigButton />
      <hr>
      <SmallButton />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
