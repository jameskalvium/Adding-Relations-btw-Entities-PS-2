import { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: 'Iphone 16',
    description: 'High-quality Mobile Phones.',
    image:
      'https://www.imagineonline.store/cdn/shop/files/iPhone_16_White_PDP_Image_Position_1__en-IN_059f5925-d6d3-4695-8e84-bc550ef50e5b.jpg?v=1727247847&width=1445',
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: 'Samsung S25 ultra',
    description: 'High quality Mobile phone.',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bakcins-544703062?imbypass=true',
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: 'Oneplus 13',
    description: 'High quality Mobile phone.',
    image:
      'https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cdni.autocarindia.com/Stuff/Uploads/ReviewImages/638718575999130938_oneplus_13_review_main.jpg&w=883&h=662&q=70&c=1',
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating =
            (product.avgRating * product.totalRatings + newRating) /
            newTotalRatings;

          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
