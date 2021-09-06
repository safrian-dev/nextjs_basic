/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
// eslint-disable-next-line import/extensions
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
    dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Users Page">
      <div>
        {dataUsers.map((user) => (
          <div role="button" key={user.id} onClick={() => { router.push(`/users/${user.id}`); }} className={styles.card}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
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
