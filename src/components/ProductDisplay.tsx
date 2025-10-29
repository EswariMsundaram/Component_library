// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay(props:ProductDisplayProps){
    const {product,showDescription,showStockStatus,onAddToCart}=props;

    const showStock=showStockStatus? 'In Stock' : 'Out Of Stock';
    const productDescription= showDescription ? product.description: 'Description not available for this product';
    

    return(
          <div className="mx-auto  flex flex-col items-center  w-220 gap-x-4 rounded-xl bg-white p-6 shadow-lg 
              outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 gap-2">
            <img className="flex flex-col items-center h-100 " src={product.imageUrl} alt="Wiress headphone image"/>
          
              <div className="text-lg font-semibold">{product.name}</div>
              <div className="text-lg text-blue-700 font-semibold"><p > $ {product.price}</p></div>
              <div className="text-gray-600 font-normal line-clamp-2">  {productDescription}</div>
              <div className="text-green-700 font-normal">{showStock}</div>
              <button onClick={()=>onAddToCart && onAddToCart(product.id)} 
              className="ml-4 font-normal rounded-lg p-2 m-4 bg-blue-500 w-200 h-10 text-white hover:text-gray-700 line-clamp-2">
                Add to Cart
              </button>
          </div>
            
        
       
    )
}
export default ProductDisplay;