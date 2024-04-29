import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  const handleLogin = () => {
    // kullanıcının google hesabı ile kimliğini doğrula
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa burası çalışır
      .then((data) => {
        // yetki state'ini güncelle
        setIsAuth(true);

        // locale'e kullanıcı bilgilerini kaydet
        localStorage.setItem("token", data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Room</h1>
        <p>Login to continue</p>

        <button onClick={handleLogin}>
          <img src="/g-logo.png" alt="logo" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
