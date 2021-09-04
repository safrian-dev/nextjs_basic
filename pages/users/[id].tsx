import { useRouter } from "next/router"

export default function UserDetail() {
    const router = useRouter();
    const {id} = router.query; //untuk mendapatkan value id
    return (
        <div>
            <p>User Detail Page {id}</p>
        </div>
    )
}
