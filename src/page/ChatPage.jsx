import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect } from "react";

const ChatPage = ({ room, setRoom }) => {
  // formun gonderilmesini kontrol et
  const handleSubmit = async (e) => {
    e.preventDefault();
    // koleksiyonun referansini al
    const messagesCol = collection(db, "messages");

    // koleksiyona yeni belge kaydet
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    // formu sifirla
    e.target.reset();
  };

  // mevcut odada gonderilen mesajlarin verisini anlik olarak al

  useEffect(() => {
    // hangi koleksiyondaki verileri istiyorsak o koleksiyonun referansini aliriz
  }, []);
  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Change Room</button>
      </header>
      <main>messages</main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your message..." />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
