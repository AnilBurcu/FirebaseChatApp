const RoomPage = () => {
  return (
    <form className="room-form">
      <h1>Chat Room</h1>
      <p>Which chat room do you want to enter?</p>

      <input type="text" placeholder="exm: free-chat" required />

      <button>Enter</button>
      <button>Quit</button>
    </form>
  );
};

export default RoomPage;
