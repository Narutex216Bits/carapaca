import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Certifique-se de importar a instância configurada do Firestore
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Estilo para organizar os elementos

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Buscando os dados do usuário
        const userDoc = await getDoc(doc(db, "users", "user1")); // Substitua "user1" pelo ID do usuário logado
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No such user!");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    const fetchUserEvents = async () => {
      try {
        // Buscando os eventos associados ao usuário
        const eventsCollection = await getDocs(collection(db, "users", "user1", "events")); // Substitua "user1"
        const eventsList = eventsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsList);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchUserData();
    fetchUserEvents();
  }, []);

  if (!userData) return <p>Carregando...</p>;

  return (
    <div className="dashboard-container">
      <div className="user-info">
        <img
          src={userData.profilePicture || "/placeholder-profile.png"} // Imagem padrão, caso não tenha foto
          alt="Foto do Usuário"
          className="user-photo"
        />
        <div className="user-details">
          <h2>{userData.Nome}</h2>
          <p>Callsign: {userData.Callsign}</p>
          <p>Equipe: {userData.Equipe}</p>
        </div>
        <img
          src={userData.teamLogo || "/placeholder-logo.png"} // Logo padrão
          alt="Logotipo da Equipe"
          className="team-logo"
        />
      </div>

      <div className="events-list">
        <h3>Eventos Participados</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Link to={`/event/${event.id}`}>{event.NomeEvento}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
