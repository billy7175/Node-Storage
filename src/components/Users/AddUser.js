import React,{useState} from "react";

import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css'; 

const AddUser = (props) => {
  const [ enteredUsername, setEnteredUsername] = useState('');
  const [ enteredUserAge, setEnteredUserAge ]= useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){
      return;
    }
    setEnteredUsername('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {

  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">userName</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" value={enteredUserAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
