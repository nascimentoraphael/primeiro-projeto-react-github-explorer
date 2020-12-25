import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48364584?s=460&u=72498e795ad123fa12ec10f30f7114ddb859f3b4&v=4"
          alt="Raphael Nascimento"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48364584?s=460&u=72498e795ad123fa12ec10f30f7114ddb859f3b4&v=4"
          alt="Raphael Nascimento"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48364584?s=460&u=72498e795ad123fa12ec10f30f7114ddb859f3b4&v=4"
          alt="Raphael Nascimento"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
