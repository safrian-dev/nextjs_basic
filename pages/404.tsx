import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Custom4040() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [])
    // set waktu untuk redirect
    // [] digunakan untuk sekali pemanggilan saja

    return (
        <div>
            <h1 className="title-not-found">Ooops, halaman tidak ditemukan..</h1>
        </div>
    )
}
