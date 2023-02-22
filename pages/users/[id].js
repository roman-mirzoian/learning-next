import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer>
      <h1>User with id: {query.id}</h1>
      <div>User name - {user.name}</div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((response) => response.json());
  return {
    props: { user },
  };
}
