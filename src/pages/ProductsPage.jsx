import Card from "../componenets/Card";
import Loader from "../componenets/Loader";
import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
