import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Layout } from "./Layout/layout";
import { Not_Found } from "./pages/Not_Found/Not_Found";
import { Single_Product } from "./pages/Single_Product/Single_Product";
import { Shopping } from "./pages/Shopping/Shopping";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Single_Product/>} />
        <Route path="shopping" element={<Shopping/>} />
        <Route path="*" element={<Not_Found />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
