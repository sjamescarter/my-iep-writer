import React from "react";

function Home({ children }) {
    return (
        <div>
            <h2>Home</h2>
            {children}
        </div>
    );
}

export default Home;