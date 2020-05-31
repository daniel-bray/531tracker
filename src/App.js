import React from 'react';
import './App.css';

import SettingsModal from './components/settings_modal/settings_modal_component';


import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";


import {roundingNumber, weightAmounts} from './assets/weightAmounts.js';

console.log(weightAmounts.squat);

let {
  squat: {reps: sreps, weight: sweight, estimatedMax: smax},
  bench: {reps: breps, weight: bweight, estimatedMax: bmax},
  deadLift: {reps: dlreps, weight: dlweight, estimatedMax: dlmax},
  press: {reps: preps, weight: pweight, estimatedMax: pmax}
} = weightAmounts;


// const squatMax = 295;
// const benchMax = 250;
// const deadliftMax = 290;
// const pressMax = 150;

let maxRepAmount = "5+";

const sixFive = .65;
// const seventy = .7;
const sevenFive = .75;
// const eighty = .8;
const eightFive = .85;
// const ninety = .9;
// const nineFive = .95;
// const four = .4;
// const five = .5;
// const six = .6;

// let z = (myNumber * 0.01);
// let zzz = roundingNumber * Math.ceil(z/roundingNumber);
// let y = (Math.round(zzz * 4) / 4).toFixed(1);

function App() {
  let handleChange = (e) => {
    console.log(e);
    maxRepAmount = e.target.value;
    console.log(maxRepAmount);
  };
  // let handleClick = () => {
  //   let maxReps = document.getElementById('repAmount');
  //   console.log(maxReps.innerText);
  //   let input = document.createElement("input");
  //   .appendChild(input);
  // }
  return (

    <Container fluid className={"App"}>
    <SettingsModal />


      <div className={"container-fluid"}>
        <div className={"row align-items-center"}>
          <div className="col-sm">
            <h1>531 BBB</h1>
            <h3>Cycle 1</h3>
            <h4>Week 1</h4>
          </div>
          {/*<div className="col-sm"></div>*/}
          <div className="col-sm">
            <Table striped bordered hover variant={"dark"}>
              <thead>
              <tr>
                <td colSpan={"5"}>Projected Maxes</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Lift</td>
                <td>Weight</td>
                <td>Reps</td>
                <td>Estimated 1RM</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>Squat</td>
                <td>{sweight}</td>
                <td>{sreps}</td>
                <td>{smax()}</td>
                <td>{roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))}</td>
              </tr>
              <tr>
                <td>Bench</td>
                <td>{weightAmounts.bench.weight}</td>
                <td>{weightAmounts.bench.reps}</td>
                <td>{bmax()}</td>
                <td>{roundingNumber * (Math.ceil((Math.round(bmax()) * .9) / roundingNumber))}</td>

              </tr>
              <tr>
                <td>Dead Lift</td>
                <td>{weightAmounts.deadLift.weight}</td>
                <td>{weightAmounts.deadLift.reps}</td>
                <td>{dlmax()}</td>
                <td>{roundingNumber * (Math.ceil((Math.round(dlmax()) * .9) / roundingNumber))}</td>

              </tr>
              <tr>
                <td>Press</td>
                <td>{weightAmounts.press.weight}</td>
                <td>{weightAmounts.press.reps}</td>
                <td>{pmax()}</td>
                <td>{roundingNumber * (Math.ceil((Math.round(pmax()) * .9) / roundingNumber))}</td>

              </tr>
              </tbody>

            </Table>
          </div>
        </div>
      </div>
      <h5>Day 1</h5>

      <Table striped bordered hover variant={"dark"}>
        <thead>
        <tr>
          <td colSpan={"4"}>Squats</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Set</td>
          <td>Weight</td>
          <td>Reps</td>
          <td>Status</td>
        </tr>
        <tr>
          <td>Warmup</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * .4) / roundingNumber)}</td>
          <td>5</td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        <tr>
          <td>Warmup</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * .47) / roundingNumber)}</td>
          <td>5</td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        <tr>
          <td>Warmup</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * .5) / roundingNumber)}</td>
          <td>3</td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * sixFive) / roundingNumber)}</td>
          <td>5</td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * sevenFive) / roundingNumber)}</td>
          <td>5</td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>{roundingNumber * Math.ceil(((roundingNumber * (Math.ceil((smax() * .9) / roundingNumber))) * .9 * eightFive) / roundingNumber)}</td>
          <td onChange={handleChange} id={"repAmount"}>
            <InputGroup style={{margin: "auto"}}>
              {/*<input type={"text"} placeholder={"5+"} />*/}
              <FormControl placeholder={maxRepAmount} plaintext
                           style={{textAlign: "center", color: "white", padding: 0}}/>
            </InputGroup>
          </td>
          <td>
            {/*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*/}
            <input type={"checkbox"}/>
          </td>
        </tr>
        </tbody>
      </Table>

      {/*<h5>Day 2</h5>*/}

      {/*<Table striped bordered variant={"dark"}>*/}
      {/*  <thead>*/}
      {/*  <tr>*/}
      {/*    <td colSpan={"4"}>Bench</td>*/}
      {/*  </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}

      {/*  <tr>*/}
      {/*    <td>Set</td>*/}
      {/*    <td>Weight</td>*/}
      {/*    <td>Reps</td>*/}
      {/*    <td>Status</td>*/}

      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * .4) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * .47) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * .5) / roundingNumber)}</td>*/}
      {/*    <td>3</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>1</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * sixFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>2</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * sevenFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>3</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((benchMax * .9 * eightFive) / roundingNumber)}</td>*/}
      {/*    <td>*/}
      {/*      <InputGroup>*/}
      {/*        <FormControl placeholder={"5+"}/>*/}
      {/*      </InputGroup>*/}
      {/*    </td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  </tbody>*/}
      {/*</Table>*/}

      {/*<h5>Day 3</h5>*/}

      {/*<Table striped bordered variant={"dark"}>*/}
      {/*  <thead>*/}
      {/*  <tr>*/}
      {/*    <td colSpan={"4"}>Dead Lift</td>*/}
      {/*  </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*  <tr>*/}
      {/*    <td>Set</td>*/}
      {/*    <td>Weight</td>*/}
      {/*    <td>Reps</td>*/}
      {/*    <td>Status</td>*/}

      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * .4) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * .47) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * .5) / roundingNumber)}</td>*/}
      {/*    <td>3</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>1</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * sixFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>2</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * sevenFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>3</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((deadliftMax * .9 * eightFive) / roundingNumber)}</td>*/}
      {/*    <td>*/}
      {/*      <InputGroup>*/}
      {/*        <FormControl placeholder={"5+"}/>*/}
      {/*      </InputGroup>*/}
      {/*    </td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  </tbody>*/}
      {/*</Table>*/}

      {/*<h5>Day 4</h5>*/}

      {/*<Table striped bordered variant={"dark"}>*/}
      {/*  <thead>*/}
      {/*  <tr>*/}
      {/*    <td colSpan={"4"}>Press</td>*/}
      {/*  </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*  <tr>*/}
      {/*    <td>Set</td>*/}
      {/*    <td>Weight</td>*/}
      {/*    <td>Reps</td>*/}
      {/*    <td>Status</td>*/}

      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * .4) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * .47) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>Warmup</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * .5) / roundingNumber)}</td>*/}
      {/*    <td>3</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>1</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * sixFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>2</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * sevenFive) / roundingNumber)}</td>*/}
      {/*    <td>5</td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td>3</td>*/}
      {/*    <td>{roundingNumber * Math.ceil((pressMax * .9 * eightFive) / roundingNumber)}</td>*/}
      {/*    <td>*/}
      {/*      <InputGroup>*/}
      {/*        <FormControl placeholder={"5+"}/>*/}
      {/*      </InputGroup>*/}
      {/*    </td>*/}
      {/*    <td>*/}
      {/*      /!*<InputGroup.Checkbox aria-label={"Checkbox for finished status"}/>*!/*/}
      {/*      <input type={"checkbox"}/>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*  </tbody>*/}
      {/*</Table>*/}

    </Container>
  );
}

export default App;
