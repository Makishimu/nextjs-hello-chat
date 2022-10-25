import type { NextPage } from 'next';
import Head from 'next/head';
import LoginPage from '../pageComponents/LoginPage';

const Login: NextPage = () => {
  return (
    <>
    <Head>
        <title>Login page</title>
    </Head>
    <LoginPage /> 
    </>
   
  )
}

export default Login;
