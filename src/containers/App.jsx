import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';



const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

 
  const getUserData = async () => {
    const {data} = await getData('https://mocki.io/v1/e3a81d38-ca71-4ab7-8aa8-f500f5b01eb3');
    setUser(data);
  }; 
  

  
  


  if (!user) return null;

  const {
    Academic: academic,
    address,
    avatar,
    email,
    experience,
    interest,
    languages,
    name,
    phone,
    profession,
    Profile: profile,
    skills,
    website,
  } = user;

  return (
    <div className="App">
      <div className="App-container">
        <Header avatar={avatar} name={name}>
          <About
            address={address}
            email={email}
            phone={phone}
            profession={profession}
            website={website}
          />
        </Header>
        <Profile profile={profile} />
        <Experience experience={experience} />
        <div className="App-grid">
          <Academic academic={academic} />
          <Skills skills={skills} />
        </div>
        <div className="App-grid">
          <Interest interest={interest} />
          <Languages languages={languages} />
        </div>
      </div>
      <div className="App-round App-top-left" />
      <div className="App-round App-bottom-right" />
    </div>
  );
};

export default App;
