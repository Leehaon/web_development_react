import { useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = {
    id: 'react',
    password: 'qwer1234',
  };

  const handleLoginForm = (event) => {
    event.preventDefault();
}

  return (
    <>
      <form action="" onSubmit={handleLoginForm}>
        <label>아이디</label>
        <input type="text" 
          placeholder='type your id' 
          onChange={(event) => setId(event.target.value)} />
        <br />
        <br />
        <label>패스워드</label>
        <input type="text" // 원래는 password 지금은 잘 보이라고 text 
          placeholder='type your password' 
          onChange={(event) => setPassword(event.target.value)} />
        <br />
        <br />
        <button>로그인 하기</button>
        <br />
      </form>
    </>
  )
}