import { useState } from "react";
import LoginPage from "./page/LoginPage";
import RoomPage from "./page/RoomPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // yetkisi yoksa giriş sayfasına yönlendir
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;
  // yetkisi varsa oda seçme sayfasına yönlendir
  return (
    <div className="container">
      <RoomPage />
    </div>
  );
};

export default App;
