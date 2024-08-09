import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState("");
  const [loggedUserToken, setLoggedUserToken] = useState("");
  const [loggedUserName, setLoggedUserName] = useState("");
  const [loggedUserEmail, setLoggedUserEmail] = useState("");
  const [loggedUserRegistrationNumber, setLoggedUserRegistrationNumber] =
    useState("");

  useEffect(() => {
    setLoggedUserToken(localStorage.getItem("loggedUserToken"));
    setLoggedUserName(localStorage.getItem("loggedUserName"));
    setLoggedUserEmail(localStorage.getItem("loggedUserEmail"));
    setLoggedUserRegistrationNumber(
      localStorage.getItem("loggedUserRegistrationNumber")
    );

    // protected resources
    fetchProducts();
  }, []);

  const fetchProducts = async (e) => {
    try {
      const url = "http://localhost:8000/products";
      //   pass token with request
      const headers = {
        headers: {
          Authorization: loggedUserToken,
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (loggedUserToken) {
      fetchProducts();
    }
  }, [loggedUserToken]);

  const handleLogOut = (e) => {
    localStorage.removeItem("loggedUserName");
    localStorage.removeItem("loggedUserEmail");
    localStorage.removeItem("loggedUserRegistrationNumber");
    localStorage.removeItem("loggedUserToken");
    handleSuccess("User logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <div>hey user: {loggedUserName}</div>
      <div>your email is: {loggedUserEmail}</div>
      <div>your registrationNumber is: {loggedUserRegistrationNumber}</div>
      <div>your login token: {loggedUserToken}</div>
      <button onClick={handleLogOut}>Logout</button>
      {/* <div>
        {products &&
          products.map((product) => (
            <div key={product.name}>
              Product Name: {product.name} - Product Price: {product.price}{" "}
            </div>
          ))}
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default Profile;
