import ProductItem from "./ProductItem";

const init_value = [
  { id: 1, name: "Test", price: 123, description: "This is description" },
  { id: 2, name: "Test 2 ", price: 122, description: "This is description 2" },
];

function ProductList() {
  return (
    <div className="container">
      <ul>
        {init_value.map((item) => (
          <ProductItem
            name={item.name}
            id={item.id}
            description={item.description}
            price={item.price}
          ></ProductItem>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
