import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-unresolved
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [router]);
  // set waktu untuk redirect
  // [] digunakan untuk sekali pemanggilan saja

  return (
    <div>
      <h1 className="title-not-found">Ooops, halaman tidak ditemukan..</h1>
    </div>
  );
}
