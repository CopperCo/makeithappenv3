import axios from 'axios';
export default {

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
  },
  // Gets one specific debt with the given id
  getDebt: function(id) {
    return axios.get('/api/debts/' + id);
  },
  // Deletes one debt with the given id
  deleteDebt: function(id) {
    return axios.delete('/api/debts/' + id);
  },
  // Saves a debt to the database
  saveDebt: function(debtData) {
    return axios.post('/api/debts', debtData);
  },
  // Gets all dreams
  getDreams: function() {
    return axios.get("/api/dreams");
  },
  // Gets the dream with the given id
  getDream: function(id) {
    return axios.get("/api/dreams/" + id);
  },
  // Deletes the dream with the given id
  deleteDream: function(id) {
    return axios.delete("/api/dreams/" + id);
  },
  // Saves a dream to the database
  saveDream: function(dreamData) {
    return axios.post("/api/dreams", dreamData);
  }
};
