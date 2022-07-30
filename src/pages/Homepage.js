import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { useQuery } from 'react-query';
import { getAllApps } from '../services/application';

const Homepage = () => {
  const history = useHistory();

  const { data = [] } = useQuery('getAllAppsForUser', () => getAllApps());

  return (
    <div className="wrapper">
      <div className="home">
        {data.map((item) => (
          <HomeButton
            key={item.id}
            text={item.name}
            onClick={() => history.push('/translate', { id: item.id, name: item.name })}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
