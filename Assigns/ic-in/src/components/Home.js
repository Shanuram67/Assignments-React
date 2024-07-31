import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const sections = [
    { year: '2007', title: 'ICC Winner 2007', start: 0, end: 2 },
    { year: '2024', title: 'ICC Winner 2024', start: 2, end: 4 }
  ];

  return (
    <div className="home">
      <h1>ICC Winners</h1>
      {sections.map(section => (
        <div key={section.year}>
          <h2>{section.title}</h2>
          <div className="images">
            {data.slice(section.start, section.end).map(image => (
              <div key={image.id}>
                <img src={'https://i.pinimg.com/474x/4d/9b/db/4d9bdb1f55aec0ae4784415c47190a75.jpg'} alt={'Its Captain things'} />
                <p>{'The 2007 ICC World Twenty20 was the inaugural edition of the ICC Mens T20 World Cup, formerly known as the ICC World Twenty20 that was contested in South Africa from 11 to 24 September 2007. Twelve teams took part in the thirteen-day tournament—the ten Test-playing nations and the finalists of the 2007 WCL Division One tournament: Kenya and Scotland. India won the tournament, beating Pakistan in the final'}</p>
                <img src={'https://static.cricbuzz.com/a/img/v1/205x152/i1/c509952/cms-img.jpg'} alt={'Its Rohith things'} />
                <p>{'South Africa, after losing the toss, took three early Indian wickets of skipper Rohit Sharma, Rishabh Pant, and Suryakumar Yadav. However, Virat Kohli and Axar Patel put on a 72-run partnership, with Patel contributing 47 runs. Kohlis 76-run innings and a late contribution of 27 by Shivam Dube helped India reach a total of 176/7, the highest first-innings total in a T20 World Cup final.South Africas chase began with the loss of two early wickets, but Quinton de Kock and Tristan Stubbs took the total to 106. After they were both dismissed, Heinrich Klaasen made the fastest fifty in a World Cup final, including scoring 24 runs off the 15th over bowled by Axar Patel. At this point, South Africa required 30 runs in 30 balls with five wickets in hand. However, Arshdeep Singh, Jasprit Bumrah, and Hardik Pandya bowled economically in the last 5 overs. Pandya picked up the wicket of Klaasen in the 17th over, Bumrah dismissed Marco Jansen in the 18th over, and Pandya dismissed David Miller, the last recognized batsman, off the first ball of the final over. The tail end batsmen were unable to overhaul Indias total, and South Africa ended their innings on 169/8, losing by 7 runs'}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
