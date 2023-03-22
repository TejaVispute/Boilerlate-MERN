import React, { useState } from "react";
import "../PagesCSS/login.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });
    // console.log(user)

    //   for setting  value of user state
    let name, value;
    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };



    const submitData = async (e) => {
        e.preventDefault();

        const { name, email, address, city, state, zip } = user;
        const res = await fetch("http://localhost:4000/adduser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, address, city, state, zip
            })
        })

        // console.log(res)
        const data = await res.json();
        // console.log(data.status)
        if (data.status === 422 || !data) {
            window.alert("invalid");
            console.log('invalid ')
        } else {
            window.alert("success");
            console.log('success ');
            navigate('/displayinfo')
        }

    }



    return (
        <>
            <form className="row g-3 p-3" id="form-wrapper">
                <h3 className="text-center p-4 bg-secondary text-white">
                    User Details Form
                </h3>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Full Name
                    </label>
                    <input
                        onChange={handleInput}
                        name="name"
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={user.name}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        onChange={handleInput}
                        name="email"
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        value={user.email}
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        onChange={handleInput}
                        name="address"
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={user.address}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        City
                    </label>
                    <input
                        onChange={handleInput}
                        name="city"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        value={user.city}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                        State
                    </label>
                    <select
                        onChange={handleInput}
                        name="state"
                        id="inputState"
                        className="form-select"
                    // value={user.state}
                    >
                        <option value={user.state}>Choose...</option>
                        <option>Maharashtra</option>
                        <option>UP</option>
                        <option>Gujarat</option>
                        <option>MP</option>
                        <option>Assam</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                        Zip
                    </label>
                    <input
                        onChange={handleInput}
                        name="zip"
                        type="text"
                        className="form-control"
                        id="inputZip"
                        value={user.zip}
                    />
                </div>

                <div className="col-12 text-center pt-4 ">
                    <button onClick={submitData} type="submit" className="btn btn-secondary">
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
