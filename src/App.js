import styled from "styled-components";
import React, {useState} from "react";

const CenterDiv = styled.div`
  position: absolute;
  top: 40%;
  height: 400px;
  width: 100%;
`;

const SingInDiv = styled.div`
  background: whitesmoke;
  position: relative;
  left: 40%;
  height: 100%;
  width: 450px;
`;

const InputDiv = styled.div`
  width: 100%;
  padding-left: 70px;
  position: relative;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
`;

const SubmitBtn = styled.button`
  float: right;
  margin-right: 100px;
  margin-top: 40px;
  
`;

function App() {
    const [inputs, setInputs] = useState({
        id: '',
        pw: ''
    });

    const {id, pw} = inputs;

    const onInput = (e) => {
        const {value, name} = e.target;
        console.log(name);
        console.log(value);
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const signIn = () => {
        console.log(id);
        console.log(pw);
    };

    return (
        <CenterDiv>
            <SingInDiv>
                <InputDiv style={{paddingTop: "80px"}}>
                    <p>아이디</p>
                    <Input name="id" type="text" onChange={onInput}/>
                </InputDiv>
                <InputDiv style={{paddingTop: "40px"}}>
                    <p>비밀번호</p>
                    <Input name="pw" type="password" onChange={onInput}/>
                </InputDiv>
                <SubmitBtn
                    type="button"
                    className="btn btn-success"
                    onClick={signIn}
                >
                    로그인
                </SubmitBtn>
            </SingInDiv>
        </CenterDiv>
    );
}

export default App;
