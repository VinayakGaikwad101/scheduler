import React, { useEffect, useState } from "react";
import { handleError } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const Profile = () => {
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

  return (
    <div>
      <div>hey user: {loggedUserName}</div>
      <div>your email is: {loggedUserEmail}</div>
      <div>your registrationNumber is: {loggedUserRegistrationNumber}</div>
      <div>your login token: {loggedUserToken}</div>

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
