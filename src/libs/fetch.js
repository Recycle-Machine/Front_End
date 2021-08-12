const BASE_URL = 'http://127.0.0.1:5000/';
 
async function callApi(endpoint, options = {}) {
  
  
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
 
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
 
  return data;
}
 
const api = {
  transactions: {
    list() {
      /* throw new Error('Not Found') */
      return callApi('/all/');
    },
    create(transaction) {
      return callApi(`/transaction/new/`, {
        method: 'POST',
        body: JSON.stringify(transaction),
      });
    },
    read(_id) {
      return callApi(`/_id:${_id}/`);
    },
    update(transactionId, updates) {
      return callApi(`/_id:${transactionId}/`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(transactionId) {
      return callApi(`/_id:${transactionId}/`, {
        method: 'DELETE',
      });
    },
  },
};
 
export default api;
 