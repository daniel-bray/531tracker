import React, {useState} from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupPrepend from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";

const SettingsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant={"dark"} onClick={handleShow} style={{marginBottom: 20}}>
        Enter Weight Settings
      </Button>

      <Modal show={show} onHide={handleClose} style={{color: "black"}}>

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Enter Weight Settings</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <label htmlFor="squats">Squats</label>
            <InputGroup size={"sm"}>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Weight
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"weight"}/>
               <InputGroup.Prepend>
                <InputGroup.Text>
                  Reps
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"reps"}/>
            </InputGroup>

            <label htmlFor="bench">Bench</label>
            <InputGroup size={"sm"}>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Weight
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"weight"}/>
               <InputGroup.Prepend>
                <InputGroup.Text>
                  Reps
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"reps"}/>
            </InputGroup>

            <label htmlFor="deadLift">Dead Lift</label>
            <InputGroup size={"sm"}>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Weight
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"weight"}/>
               <InputGroup.Prepend>
                <InputGroup.Text>
                  Reps
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"reps"}/>
            </InputGroup>

            <label htmlFor="press">Press</label>
            <InputGroup size={"sm"}>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Weight
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"weight"}/>
               <InputGroup.Prepend>
                <InputGroup.Text>
                  Reps
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label={"reps"}/>
            </InputGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button variant={"secondary"} onClick={handleClose}>Close</Button>
            <Button variant={"primary"} onClick={handleClose}>Save Changes</Button>
          </Modal.Footer>
        </Modal.Dialog>

      </Modal>
    </>

  )
}

export default SettingsModal;