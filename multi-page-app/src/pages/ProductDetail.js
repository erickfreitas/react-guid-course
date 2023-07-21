import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
      <p>
        <Link to=".." relative="path">
          Go back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
