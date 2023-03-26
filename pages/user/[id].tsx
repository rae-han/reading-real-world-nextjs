import React from 'react';
import {NextPage} from "next";

const GreetUser: NextPage = ({user}) => {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  )
}

export const getServerSideProps = (req) => {
  return {
    props: {
      user: req.params.id
    }
  }
}

export default GreetUser;