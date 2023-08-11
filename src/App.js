import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkout/checkout.component";
import { createUserDocFromAuth, onAuthStateChangeListerner } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListerner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user)); // Corrected to dispatch
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
