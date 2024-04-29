const RoomPage = ({ setIsAuth, setRoom }) => {
  // oturum kapatma
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  // oda ismini kaydet
  const handleSubmit = (e) => {
    e.preventDefault();
    // input değerini al
    const room = e.target[0].value.toLowerCase();
    // girilecek odanın state'ini güncelle
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-form">
      <h1>Chat Room</h1>
      <p>Which chat room do you want to enter?</p>

      <input type="text" placeholder="exm: free-chat" required />

      <button>Enter</button>
      <button onClick={logOut}>Quit</button>
    </form>
  );
};

export default RoomPage;
