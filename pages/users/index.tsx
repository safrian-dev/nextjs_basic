/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import Layout from '../../components/Layout';

interface UsersProps {
    dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  return (
    <Layout pageTitle="Users Page">
      <div>
        {dataUsers.map((user) => (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() { // getStaticProps untuk memanggil data APIP, context digunakan untuk mengakses params dsb
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
