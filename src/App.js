import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "./actions/actionTypes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = props => {
  const [amount, setamount] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{props.account}</h1>
      <input
        type="text"
        value={amount}
        onChange={e => setamount(e.target.value)}
        className="form-conrol"
      />
      <button onClick={() => dispatch(deposit(amount))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(amount))}>Withdraw</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    account: state.Reducer.account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: account => dispatch(deposit(account)),
    withdraw: account => dispatch(withdraw(account))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
