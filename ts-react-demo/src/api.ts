export const login = async (username: string, password: string) => {
    const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({username, password})
    })

    if(!response.ok) {
        console.log("Problem happened");
    }
    else{
        console.log("you are logged in");
    }
}

export const getDogs = async () => {
    const response = await fetch("http://localhost:4000/dogs", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
    })

    if(!response.ok) {
        console.log("Problem happened");
    }
    else{
        return response.json();
    }
}