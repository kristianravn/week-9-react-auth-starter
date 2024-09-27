export const signupFetch = async (username, email, password) =>{
    try {
        const response = await fetch("http://localhost:5001/users/signup",{

            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
    
        const data = await response.json();
      

      return data;
    } catch (error) {
       console.log(error);
       alert("there is an error. please check console"); 
    }
};

export const  loginFetch = async (username,password) => {
    try {
       const response = await fetch ("http://localhost:5001/users/login",{

        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
       });

       const data = await response.json ();
       console.log("data in loginFetch", data);

            return data;
        } catch (error) {
        console.log(error);
        alert("there is an error. please check console");
    }
};

export const getAllUsersFetch = async () => {
    try {
        const response = await fetch("http://localhost:5001/users/getallusers",{

            method: "GET",
            mode: "cors",
            header: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json ();
        console.log("data in loginFetch", data);
        return data;
    } catch (error) {
        console.log(error);
        alert("there is an error check console");
    }
};