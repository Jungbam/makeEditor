import React from 'react';

const uri = `https://www.tistory.com/oauth/authorize?
client_id=${process.env.REACT_APP_CLIENT_ID}
&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}
&response_type=code`

function Home() {

  return (
    <div>
        <a href={uri}>hi</a>
      Home
    </div>
  );
}


export default Home;