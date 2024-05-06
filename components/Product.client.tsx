
interface ProductProps {
    name: string;
    price: number;
    image: string;
  }
  
  const Product: React.FC<ProductProps> = ({ name, price, image }) => {
    return (
      <div className="p-4">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>
    );
  };
  
  export default Product;