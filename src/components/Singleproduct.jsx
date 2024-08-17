

export default function Singleproduct({product}) {
    const {_id, productName, productImage, description, price, brand, category, ratings, productCreationDate} = product;
    const date = new Date(productCreationDate);
    const localDate = date.toLocaleString();
  return (
    <div className="card bg-base-100 shadow-xl">
  <figure>
    <img src={productImage} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {productName}
      <div className="badge badge-secondary">{ratings}</div>
    </h2>
    <p>{description}</p>
    <h3 className="text-xl font-semibold">Price : {price} $</h3>
    <h3 className="text-xl font-semibold">Brand : {brand}</h3>
    <h4>Category : {category}</h4>
    <h4>{localDate}</h4>

  </div>
</div>
  )
}
