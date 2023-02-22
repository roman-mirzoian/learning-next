import A from "./A";
import Head from "next/head";

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="roma next-lesson"></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Main page" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          display: flex;
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
