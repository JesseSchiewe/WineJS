import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';


export default function App() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);

  const [name, setName] = useState("");

  const [count, setCount] = useState(0);
  const [value1, setValue] = useState(1);

  function onSubmit(data) {
    console.log(data);
  }

  
  let currentTEST = "9";
  function updateTextInput(val,changeID) {
    document.getElementById(changeID).value=val;
    currentTEST=val;
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
      <input type="number" placeholder="Vintage" name="Vintage" ref={register} />

      <h2>Nose Intensity
        <select name="Nose Intensity" ref={register({ required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </h2>

      <h2>Flavor Intensity
        <select name="Flavor Intensity" ref={register({ required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </h2>


      <h2>Flavor Characteristics</h2>
      <input type="range" id="FlavorCharacteristics" name="FlavorCharacteristics" min="0" max="25" defaultValue="0" onChange={e => updateTextInput(e.target.value,'FlavorScore')} ref={register} />
      <input type="text" id="FlavorScore" name="FlavorScore" defaultValue="0" />
      <div class="value">{currentTEST}</div>

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
      <input type="range" id="F3" name="F3" min="0" max="25" defaultValue="0" onChange={e => setValue(e.target.value)} ref={register} />


      <h2>Balance
        <select name="Balance" ref={register({ required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </h2>

      <h2>Length
        <select name="Length" ref={register({ required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </h2>

      <input type="number" placeholder="Total" name="Total" ref={register} />
      <textarea name="Notes" placeholder="Wine Notes" ref={register} />

      <input type="submit" />
      
    </form>
  );
}