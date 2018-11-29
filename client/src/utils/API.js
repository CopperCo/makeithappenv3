import axios from 'axios';
export default {
  // Gets all debt
  getDebts: function() {
    return axios.get('/api/debt');
  },

  // Gets budget
  getBudget: function() {
    return axios.get('/api/budgetsetup');
  },
  // Gets the income with the given id
  getIncome: function(id) {
    return axios.get('/api/budgetsetup/' + id);
  },
  // Gets the expense with the given id
  getExpense: function(id) {
    return axios.get('/api/budgetsetup/' + id);
  },
  // Deletes the income with the given id
  deleteIncome: function(id) {
    return axios.delete('/api/budgetsetup/' + id);
  },
  // Deletes the expense with the given id
  deleteExpense: function(id) {
    return axios.delete('/api/budgetsetup/' + id);
  },
  // Saves an income to the database
  saveIncome: function(incomeData) {
    return axios.post('/api/budgetsetup', incomeData);
  },
  // Saves an expense to the database
  saveExpense: function(expenseData) {
    return axios.post('/api/budgetsetup', expenseData);
  }
};
