import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />;
    </CartProvider>
  );
}

export default App;
