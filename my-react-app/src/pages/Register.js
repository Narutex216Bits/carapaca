import React, { useState } from "react";
import { auth } from "../firebase"; // Importação da instância de autenticação
import { db } from "../firebase"; // Importação da instância do Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [name, setName] = useState("");
  const [callsign, setCallsign] = useState("");
  const [team, setTeam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores

    if (!name || !callsign || !team || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salva os dados no Firestore usando o UID do usuário
      await setDoc(doc(db, "users", user.uid), {
        name,
        callsign,
        team,
        email,
      });

      alert("Usuário cadastrado com sucesso!");
      setName("");
      setCallsign("");
      setTeam("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao cadastrar o usuário.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2 style={{ textAlign: "center" }}>Cadastro de Usuário</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="text"
          placeholder="Callsign"
          value={callsign}
          onChange={(e) => setCallsign(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="text"
          placeholder="Equipe"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cadastrar
        </button>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
