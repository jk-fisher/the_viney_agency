import { useRouter } from 'next/router'

const Page = () => {

    const router = useRouter();
    const { pId } = router.query
    return ( <h1>
        Page: { pId }
    </h1> );
}
 
export default Page;