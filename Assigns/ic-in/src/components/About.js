import React, { useEffect, useState } from 'react';

const About = () => {
  const [iccData, setIccData] = useState(null);
  const [rohitData, setRohitData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(data => setIccData(data));

    fetch('https://jsonplaceholder.typicode.com/photos/2')
      .then(response => response.json())
      .then(data => setRohitData(data));
  }, []);

  return (
    <div className="about">
      <h1>About ICC</h1>
      {iccData && (
        <div>
          <img src={'https://res.cloudinary.com/icc-web/image/private/t_ratio16_9-size20/v1698332911/prd/assets/static_pages/about-icc-about-us.jpg'} alt={'About ICC'} />
          <p>{'The ICC is the global governing body for cricket. Representing 108 members, the ICC governs and administrates the game and works with our members to grow the sport. The ICC is also responsible for the staging of all ICC Events.'}</p>
        </div>
      )}
      <h1>About Rohit Sharma</h1>
      {rohitData && (
        <div>
          <img src={'https://cdn.bignewsnetwork.com/ani1719824393.jpg'} alt={'Mission Accomplish Captain'} />
          <p>{'Sharma is an aggressive batsman but plays with style and elegance.[108][109] He is usually an opening batsman in limited overs cricket, but has played most of his Test cricket as a middle-order batsman.[110][111] In limited overs cricket, Sharma is widely recognised as one of the formats most outstanding batsmen.[112][113] And for his attacking batting and six hitting abilities he often referred as Hitman.[114]'}</p>
        </div>
      )}
    </div>
  );
};

export default About;
