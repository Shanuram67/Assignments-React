import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroComponent from './HeroComponent';

const Dashboard = () => {
  const navigate = useNavigate();
  const heroes = [
    {
      id: 1,
      title: 'Loki Cinematic Universe',
      description: 'The Lokesh Cinematic Universe (LCU), The first feature of the universe Kaithi was released in 2019, while the second installment Vikram was released in 2022 and third installment Leo was released in 2023[b] with Leo being the highest grosser of all LCU films. The universe follows an elaborate conflict between law enforcement officers and vigilantes in South India who are at war against dangerous drug cartels led by powerful crime lords. A 10-minute short film detailing the origins of the LCU will be released in late 2024, before the commencement of Kaithi 2, is an Indian media franchise and shared universe of Tamil-language action thriller films created by Lokesh Kanagaraj.[a] It is currently the highest grossing Tamil film franchise.',
      details: {
        Fanpresident: 'Shanmukha',
        id: 1,
        title: 'Lokesh direction big fan',
        MoviesLike: 'Master, Khaithi',
        HeLikes: 'Music and action movies, Vikram, Leo, Kaithi, Rolex, Napleoen',
      },
    },
    {
      id: 2,
      title: 'K A L K I Universe',
      description: 'In late May 2024, it was reported that the film would have a sequel.[163] On 26 June, a day prior to the films release, Ashwin commented on Kalki 2898 AD: Part 2 and stated that it would begin in three years.[164] During mid-credits of the film, it was revealed to be part of a media franchise named Kalki Cinematic Universe which had earlier been teased in Bujji and Bhairava, a prequel series released prior to the film. On 29 June, producer C. Aswani Dutt announced that 60% of the filming for Kalki 2898 AD: Part 2 has been completed, with several major segments still remaining to be shot.',
      details: {
        Fanpresident: 'Shanmukha',
        id: 2,
        title: 'Kalki Universe Fan',
        MoviesLike: 'Kalki 2898Ad, kalki 3120Bc',
        HeLikes: 'Karna, Krishna, Yakshin Supreme justice, Aswathama ',
      },
    },
    {
      id: 3,
      title: 'Animal SRV',
      description: 'In the film, Ranvijay Singh, a ruthless and vile man learns about an assassination attempt on his father and sets out on a path of vengeance and destruction. Animal can have no feelings only emotion that lion has only his father emotion',
      details: {
        Fanpresident: 'Shanmukha',
        id: 3,
        title: 'Gurto petko Sandeep Reddy Vanga Po',
        MoviesLike: 'Animal, Beast',
        HeLikes: 'Father Emotion, Brutal Mind, Self-confidence',
      },
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-4 bg-yellow-500" >TFI Banisa Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {heroes.map((hero) => (
          <HeroComponent key={hero.id} hero={hero} />
        ))}
      </div>
      <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">Log Out</button>
    </div>
  );
};

export default Dashboard;
