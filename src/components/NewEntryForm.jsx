import {  Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
function NewEntryForm() {
    return ( <Form unstackable>
        <Form.Group>
          <Form.Input icon={"tags"} label="Description" placeholder="New shinny thing" width={12}/>
          <Form.Input icon={"dollar"} label="Value" placeholder="100.00" width={4}/>
          
        </Form.Group>
        <ButtonSaveOrCancel></ButtonSaveOrCancel>
      </Form> );
}

export default NewEntryForm ;