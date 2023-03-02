function PostRequest({ API, endpoint, newData, setState, currentState }) {
    return ( 
        fetch(API + endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
          })
        .then(r => r.json())
        .then(data => setState([...currentState, data]))
    );
}

export default PostRequest;