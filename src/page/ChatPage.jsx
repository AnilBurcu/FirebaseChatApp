import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // formun gonderilmesini kontrol et
  const handleSubmit = async (e) => {
    e.preventDefault();
    // koleksiyonun referansini al
    const messagesCol = collection(db, "messages");

    // koleksiyona yeni belge kaydet
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      sender: {
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
    const messagesCol = collection(db, "messages");

    // sorgu olustur

    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // koleksiyondaki verileri al()guncel olmasi icin snapshot kullandik, yoksa getDocs kullanabilirdik
    onSnapshot(q, (snapshot) => {
      // verileri gecici olarak tutacagimiz dizi
      const temp = [];
      // dokumandaki verileri don ve verilere eris
      snapshot.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      // guncel mesajlari state'e aktar
      setMessages(temp);
    });
  }, []);
  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Change Room</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your messages..." />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
