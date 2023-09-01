import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
        id: number;
        name: string;
        price: number;
        size: string;
    };

const ProductPage = () => {
    const { push } = useRouter()
    const [products, setProducts] = useState([]);
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        if(!isLogin){
            push('/auth/login')
        }
    }, [])

    useEffect(() => {
        fetch("/api/product")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
                console.log(data.data)
            })
    }, [])

    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: productType) => {
                return (
                <div key={product.id}>{product.name}</div>
                )
            })}
        </div>
    )
}

export default ProductPage;