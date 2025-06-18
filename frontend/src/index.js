import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_Z2l2aW5nLWltcGFsYS04My5jbGVyay5hY2NvdW50cy5kZXYk"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
          </Routes>
        </Provider>
      </ScrollToTop>
      <Toaster />
    </BrowserRouter>
  </ClerkProvider>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { Toaster } from "react-hot-toast";

// import {
//   Home,
//   Product,
//   Products,
//   AboutPage,
//   ContactPage,
//   Cart,
//   Login,
//   Register,
//   Checkout,
//   PageNotFound,
// } from "./pages";
// import ScrollToTop from "./components/ScrollToTop";
// import { SignIn, SignUp, RedirectToUserProfile, ClerkLoaded } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = "pk_test_Z2l2aW5nLWltcGFsYS04My5jbGVyay5hY2NvdW50cy5kZXYk";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//     <Provider store={store}>
//       <BrowserRouter>
//         <ScrollToTop>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Products />} />
//             <Route path="/product/:id" element={<Product />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/cart" element={<Cart />} />

//             {/* Clerk Auth Routes */}
//             <Route path="/login" element={<SignIn />} />
//             <Route path="/register" element={<SignUp />} />
//             <Route path="/login/sso-callback" element={<RedirectToUserProfile />} />

//             {/* Protected Route */}
//             <Route
//               path="/checkout"
//               element={
//                 <SignedIn>
//                   <Checkout />
//                 </SignedIn>
//               }
//             />
//             <Route
//               path="/checkout"
//               element={
//                 <SignedOut>
//                   <RedirectToSignIn />
//                 </SignedOut>
//               }
//             />

//             {/* Fallback */}
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </ScrollToTop>
//         <Toaster />
//       </BrowserRouter>
//     </Provider>
//   </ClerkProvider>
// );
