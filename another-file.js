// 👇️ named export
function Aber(props){
        return(<> <div>
        <a>oi {props.casa} </a>
        </div>
        <div>
        <b>{props.teto}</b>
        </div></>);
    }

export function BigButton() {
const abe = [{casa : 'quebrada', teto: 'raxado'}];
  return (
    <button
      style={{padding: '2rem 1rem'}}
      onClick={() => console.log('big button')}
    >
      Big button {abe.map((aber)=> <Aber casa = {aber.casa} teto = {aber.teto}/>)}
    </button>
  );
}

// 👇️ named export
export const SmallButton = () => {
  return (
    <button onClick={() => console.log('small button')}>Small button</button>
  );
};
