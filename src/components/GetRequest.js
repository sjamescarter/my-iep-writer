function GetRequest({ API, endpoint, setState }) {
    return ( 
        fetch(API + endpoint)
        .then(r => r.json())
        .then(data => setState(data))
    );
}

export default GetRequest;