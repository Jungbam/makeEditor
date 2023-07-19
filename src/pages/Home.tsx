import React from 'react';

const uri = `https://www.tistory.com/oauth/authorize?
client_id=${process.env.REACT_APP_CLIENT_ID}
&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}
&response_type=code`

function Home() {

  return (
    <div>
        티스토리 API 테스트
        <a href={uri}>티스토리 로그인</a>
    </div>
  );
}


export default Home;