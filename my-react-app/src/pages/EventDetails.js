import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./EventDetails.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventDoc = await getDoc(doc(db, "events", eventId)); // Ajuste a estrutura conforme o Firestore
        if (eventDoc.exists()) {
          setEventData(eventDoc.data());
        } else {
          console.log("Evento não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do evento:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!eventData) return <p>Carregando detalhes do evento...</p>;

  return (
    <div className="event-details-container">
      <h1>{eventData.NomeEvento}</h1>
      <p><strong>Local:</strong> {eventData.Local}</p>
      <p><strong>Data:</strong> {eventData.Data}</p>
      <p><strong>Pontuação:</strong> {eventData.Pontuacao}</p>
      <p><strong>Respawns:</strong> {eventData.Respawns}</p>
    </div>
  );
};

export default EventDetails;
