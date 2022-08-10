
import { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// 👇️ named import
import {BigButton, SmallButton} from './another-file';



 function App() {
  return (
    <div>
      <BigButton />

      <hr />

      <SmallButton />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/


export default App;
