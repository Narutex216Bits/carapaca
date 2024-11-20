import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Certifique-se de configurar o Firestore no arquivo firebase.js
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import "./TeamPage.css"; // Arquivo de estilização para o layout

const TeamPage = ({ teamId }) => {
  const [teamData, setTeamData] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Busca os dados da equipe pelo ID fornecido
        const teamRef = doc(db, "teams", teamId);
        const teamSnapshot = await getDoc(teamRef);

        if (teamSnapshot.exists()) {
          setTeamData(teamSnapshot.data());
        } else {
          console.error("Equipe não encontrada!");
        }

        // Busca os jogos associados à equipe
        const gamesRef = collection(teamRef, "games");
        const gamesSnapshot = await getDocs(gamesRef);

        const gamesList = gamesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGames(gamesList);
      } catch (error) {
        console.error("Erro ao buscar dados da equipe:", error);
      }
    };

    fetchTeamData();
  }, [teamId]);

  if (!teamData) {
    return <div>Carregando dados da equipe...</div>;
  }

  return (
    <div className="team-page">
      <img
        src={teamData.logoUrl}
        alt={`Logo da equipe ${teamData.name}`}
        className="team-logo"
      />
      <h1 className="team-name">{teamData.name}</h1>
      <h2 className="team-motto">{teamData.motto}</h2>
      <h3 className="team-location">
        {teamData.city}, {teamData.state}
      </h3>

      <h2 className="games-title">Jogos Participados</h2>
      <table className="games-table">
        <thead>
          <tr>
            <th>Nome do Jogo</th>
            <th>Data</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.date}</td>
              <td>{game.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamPage;
