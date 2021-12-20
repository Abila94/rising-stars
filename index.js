import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Account extends React.Component {
  render() {
    return (
     
      <div class="container">
      <div>
        <form>
          <div class="form-group">
            <h1>Account Details</h1>
            
             <div class="text-field">
              
                <input type="text" required/>
                <label>First Name</label>
            </div>
           
           <div class ="text-field">
                <input type="text" required/>
                <label>Last Name</label>
                </div>
                
                
            
            <div class="text-field">
                <input type="tel" required/>
                <label>Phone Number</label>
            </div>
            <div class="text-field">
                <input type="text" required/>
                <label>Door No./Building_Name/Apartment</label>
            </div>
            <div class="text-field">
                <input type="text" required/>
                <label>City/Town</label>
            </div>
            <div> <span>Payment Mode</span> &nbsp; &nbsp;
            
            <select name="payment" id="payment">
  <option value="credit">Credit Card</option>
  <option value="debit">Debit Card</option>
  <option value="netbanking">Net Banking</option>
  <option value="gpay">Google Pay</option>
</select></div><br/><br/>
<div class="text-field">
                <input type="text" required/>
                <label>Account Holder Name</label>
                </div> 
                <div class="text-field">
                <input type="text" required/>
                <label>Account Number</label>
            </div>
            <div class="text-field">
                <input type="text" required/>
                <label>IFSC Code</label>
            </div>
            <div class="text-field">
                <input type="text" required/>
                <label>CVV</label>
            </div>
            <div><input type="submit" id="btn1"></input></div>
           
       
          </div>
          </form>
          </div></div>
    );
  }
  
}

ReactDOM.render(
  <Account />,
  document.getElementById('root')
);