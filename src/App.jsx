import { RouterProvider } from "react-router-dom";

import AuthProvider from "./components/providers/AuthProvider";
import router from "./routes/routers";
function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
