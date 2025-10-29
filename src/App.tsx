
import AlertBox from "./components/AlertBox";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";
import './App.css';

function App() {
  const user1 = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Software Engineer",
    avatarUrl: "./src/components/avatar.jpg"
  };

  const product = {
  id: '1',
  name: 'Wireless Headphones',
  price:  199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: './src/wiress_headphones.jpeg',
  inStock: true
};



  return (
    <main className="bg-stone-900  text-black h-full p-5 ">
      <section>
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm text-left mt-6">You can now continue using the application.</p>
        </AlertBox>

        <AlertBox
          type="warning"
          message="Attention needed."
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm text-left mt-6">You can now continue using the application.</p>
        </AlertBox>

        <AlertBox
          type="error"
          message="Your profile has an error."
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm text-left mt-6">You can now continue using the application.</p>
        </AlertBox>

        <AlertBox
          type="info"
          message="Info"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm text-left mt-6">You can now continue using the application.</p>
        </AlertBox>
      </section>
      <section>
        <UserProfileCard
          user={user1}
          showEmail={user1.email}
          showRole={user1.role}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          {/* <div className="text-sm text-black">Last login: 2 hours ago</div> */}
        </UserProfileCard>
      </section>

      <section >
        
        <ProductDisplay 
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)} 
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      
      </section>

        
    </main>
  );
}

export default App;
