import styles from "./DetailProduct.module.scss"
import { ProductType } from "@/types/product.type"

const DetailProductView = ({ product }: { product: ProductType }) => { 

    return (
        <div>
            <div className={styles.productDetail}>
            <h1>Detail Product Page</h1>
                <div className={styles.productDetail__image}>
                    <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.productDetail__name}>
                    {product.name}
                </h4>
                <p className={styles.productDetail__category}>
                    {product.category}
                </p>
                <p className={styles.productDetail__price}>
                    {product.price && product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    })}
                </p>
            </div>
        </div>
    )
}

export default DetailProductView