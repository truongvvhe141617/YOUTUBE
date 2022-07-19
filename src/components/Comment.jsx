import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://i.ytimg.com/an_webp/NGi7u2qZ2c0/mqdefault_6s.webp?du=3000&sqp=CNbU2ZYG&rs=AOn4CLCNqH1p7A5c_6wJOU8ht_Fm_LPuuA" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
        You can install React Router from the public npm registry with either npm or yarn. Since we’re building a web app, we’ll use react-router-dom in this guide.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
