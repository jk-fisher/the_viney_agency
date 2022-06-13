import { useRouter } from 'next/router'

const page = () => {

    const router = useRouter();
    const { pId } = router.query
    return ( <h1>
        Page: { pId }
    </h1> );
}
 
export default page;