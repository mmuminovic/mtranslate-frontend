import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { useQuery } from 'react-query';
import { getAllApps } from '../services/application';

const Homepage = () => {
  const navigate = useNavigate();

  const { data = [] } = useQuery('getAllAppsForUser', () => getAllApps());

  return (
    <div className="wrapper">
      <div className="home">
        {data.map((item) => (
          <HomeButton
            key={item.id}
            text={item.name}
            onClick={() => navigate('/translate', { state: { id: item.id, name: item.name } })}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
