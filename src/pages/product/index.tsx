import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
    const { push } = useRouter()
    const [products, setProducts] = useState([]);
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        if(!isLogin){
            push('/auth/login')
        }
    }, [])

    // menggunakan library swr
    const { data, error, isLoading } = useSWR("/api/product", fetcher);
    

    // manual get API menggunakan useEffect fetch api
    // useEffect(() => {
    //     fetch("/api/product")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data.data);
    //             console.log(data.data)
    //         })
    // }, [])

    return (
        <div>
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    )
}

export default ProductPage;