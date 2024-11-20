import './AboutUs.css'; // Arquivo CSS para estilização
import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Sobre Nós</h1>
      <div className="team-container">
        <div className="team-member">
          <img src={require('../assets/marcio.jpg')} alt="Foto do membro 1" className="team-photo" />
          <h2 className="team-name">Marcio Henrique de Tulio</h2>
          <h3 className="team-role">Desenvolvedor e Hardware</h3>
          <p className="team-description">
            {/* Espaço para 10 linhas de texto */}
            {/* Adicione seu texto aqui */}
          </p>
        </div>
        <div className="team-member">
          <img src={require('../assets/mariaeduarda.jpg')} alt="Foto do membro 2" className="team-photo" />
          <h2 className="team-name">Maria Eduarda Massotte</h2>
          <h3 className="team-role">Desenvolvedora e Documentação</h3>
          <p className="team-description">
            {/* Espaço para 10 linhas de texto */}
            {/* Adicione seu texto aqui */}
          </p>
        </div>
        <div className="team-member">
          <img src={require('../assets/kallyne.jpg')} alt="Foto do membro 3" className="team-photo" />
          <h2 className="team-name">Maria Kallyne Tenório da Silva</h2>
          <h3 className="team-role">Desenvolvedora e Banco de Dados</h3>
          <p className="team-description">
            {/* Espaço para 10 linhas de texto */}
            {/* Adicione seu texto aqui */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
