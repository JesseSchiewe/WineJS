import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';


export default function App() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);

  const [valueNOSE, setValueNOSE] = useState(0);
  const [valueINTENSE, setValueINTENSE] = useState(0);
  const [valueCHAR, setValueCHAR] = useState(0);
  const [valueBAL, setValueBAL] = useState(0);
  const [valueLEN, setValueLEN] = useState(0);
  //const totalValue = (50 + Number(valueNOSE) + Number(valueINTENSE) + Number(valueCHAR) + Number(valueBAL) + Number(valueLEN))
  let totalValue = (Number(valueNOSE) + Number(valueINTENSE) + Number(valueCHAR) + Number(valueBAL) + Number(valueLEN))
  if ( totalValue !== 0 ) {
    totalValue = 50 + totalValue
  } 

  let colorTEST = "Red"


  function onSubmit(data) {
    alert("Successfully Submitted Review");
    console.log(data);
  }

  function updateTextInput(val,changeID) {
    document.getElementById(changeID).value=val;
  }

  function updateTextInput2(val) {
    alert(`Value: ${val}`);
    document.getElementById('F4').value=val;
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="WineJS Wine Review">
        <h1>WineJS Review</h1>
      </div>

      <h2>Producer</h2>
      <input type="text" placeholder="Producer" name="Producer" ref={register} />

      <h2>Wine Name</h2>
      <input type="text" placeholder="Wine Name" name="Wine Name" ref={register({required: true, maxLength: 100})} />

      <h2>Vintage</h2>
      <input type="number" placeholder="Vintage" name="Vintage" ref={register({min: 1900,max: 2030})} />

      <h3>Nose Intensity</h3>
      <div class="value">{valueNOSE}</div>
      <input type="range" id="NoseIntensity" name="NoseIntensity" min="1" max="5" defaultValue="0" onChange={e => setValueNOSE(e.target.value)} ref={register} />

      <h3>Flavor Intensity</h3>
      <div class="value">{valueINTENSE}</div>
      <input type="range" id="FlavorIntensity" name="FlavorIntensity" min="1" max="10" defaultValue="0" onChange={e => setValueINTENSE(e.target.value)} ref={register} />

      <h3>Flavor Characteristics</h3>
      {/* <input type="range" id="FlavorCharacteristics" name="FlavorCharacteristics" min="0" max="25" defaultValue="0" onChange={e => updateTextInput(e.target.value,'FlavorScore')} ref={register} /> */}
      <div class="value">{valueCHAR}</div>
      <input type="range" id="FlavorCharacteristics" name="FlavorCharacteristics" min="1" max="25" defaultValue="0" onChange={e => setValueCHAR(e.target.value)} ref={register} />

      <h3>Balance</h3>
      <div class="value">{valueBAL}</div>
      <input type="range" id="Balance" name="Balance" min="1" max="5" defaultValue="0" onChange={e => setValueBAL(e.target.value)} ref={register} />

      <h3>Length</h3>
      <div class="value">{valueLEN}</div>
      <input type="range" id="Length" name="Length" min="1" max="5" defaultValue="0" onChange={e => setValueLEN(e.target.value)} ref={register} />

      <h4>Total</h4>
      <div class="value">{totalValue}</div>
      <input type="hidden" id="Total" name="Total" defaultValue={totalValue} ref={register}/>

      <h2>Tasting Notes</h2>
      <textarea name="TastingNotes" ref={register} />

      {/* <p></p>
      <h2>Total</h2>
      <div class="value">{pointTOTAL}</div>

      <h2>Test AREA 6</h2>
      <p>You clicked {count} times</p>
      <p>TotalValue: {Number(valueNOSE) + Number(valueBAL)}</p>
      <button onClick={refresh}>Click dis button</button> */}




{/* 
      <h2>TEST STUFF</h2>
      <div class="value">0</div>
      <input type="range" min="0" max="10" step="1" ></input>

      <h2>TEST AREA 2</h2>
      <input type="range" min="0" max="10" step="1" ></input>
      <div class="value"></div>

      <h2>TEST AREA 3</h2>
      <input type="range" id="F1" name="F1" min="0" max="25" defaultValue="0" onChange={e => updateTextInput(e.target.value,'F2')} ref={register} />
      <input type="text" id="F2" name="F2" defaultvalue="0" />

      <h2>Test AREA 4</h2>
      <input type="range" id="F3" name="F3" min="0" max="25" defaultValue="0" onChange={e => updateTextInput2(e.target.value)} ref={register} />
      <input type="text" id="F4" name="F4" defaultvalue="0" />

      <h2>TEST AREA 5</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <h2>Test AREA 6</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click dis button</button>

      <h2>Test AREA 7</h2>
      <p>Your value is {value1}</p>
      <div class="value">{value1}</div>
      <input type="range" id="F3" name="F3" min="0" max="25" defaultValue="0" onChange={e => setValue1(e.target.value)} ref={register} /> */}

      <input type="submit" />
      
    </form>
  );
}