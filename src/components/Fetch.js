const API = "http://localhost:3000"

function getRequest(endpoint, setState) {
  fetch(API + endpoint)
  .then(r => r.json())
  .then(data => setState(data));
}

function postRequest(endpoint, newData, setState) {
  fetch(API + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  })
  .then(r => r.json())
  .then(student => setState((currentState) => [...currentState, student]));
}

function deleteRequest(endpoint, id, setState) {
  fetch(API + endpoint + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(setState((currentState) => currentState.filter(student => student.id !== id)));
}

export { getRequest, postRequest, deleteRequest };