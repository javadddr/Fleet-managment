import React, { useState } from "react";

function ExpensesPopup(props) {
  const [expenses, setExpenses] = useState(props.expenses);
 props.setExpenses
  const handleAddExpense = () => {
    setExpenses([...expenses, { id: expenses.length + 1, what: "", when: "", cost: "" }]);
  };

  const handleExpenseChange = (event, expenseId, field) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === expenseId) {
        return { ...expense, [field]: event.target.value };
      }
      return expense;
      
     
    });
    setExpenses(updatedExpenses);
    
    
  };

  

  const handleExpenseDelete = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  const getTotalCosts = () => {
    const totalCosts = expenses.reduce((acc, expense) => {
      return acc + Number(expense.cost);
    }, 0);
    return totalCosts.toFixed(1);
  };

  return (
    <div class="popup-wrapper">
  <div class="popup-content">
    <div className="vivii">
     <div className="expenstotaldiv">
      <div className="tablibo">
            <table>
              <thead>
                <tr>
                  <th>What</th>
                  <th>When</th>
                  <th>Cost</th>
                  <th>Delete</th>
                </tr>
              </thead>
             
              <tbody >
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>
                      <input
                        type="text"
                        value={expense.what}
                        onChange={(event) => handleExpenseChange(event, expense.id, "what")}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={expense.when}
                        onChange={(event) => handleExpenseChange(event, expense.id, "when")}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={expense.cost}
                        onChange={(event) => handleExpenseChange(event, expense.id, "cost")}
                      />
                    </td>
                    <td>
                      <button className="deletecost" onClick={() => handleExpenseDelete(expense.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              
            </table>
      </div>
     
      <div className="totalandadd">
      <div className="total">
      <tfoot>
          <tr>
            <td colSpan="2" className="total-label">
              Total :   
            </td>
            <td colSpan="2" className="total-cost  ">
            <span className="costs">{getTotalCosts()}  &#x20AC;</span>
            </td>
          </tr>
        </tfoot>
      </div>
      <div className="buttons">
        <button className="costbtn2" onClick={handleAddExpense}>Add Expense</button>
        <button className="costbtn1" onClick={props.handleClick} >close</button>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ExpensesPopup;
