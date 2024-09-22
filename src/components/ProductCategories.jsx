import React from 'react';

const categories = [
  { id: 1, name: 'T-Shirts', image: 'path_to_image_1' },
  { id: 2, name: 'Hoodies', image: 'path_to_image_2' },
  { id: 3, name: 'Mugs', image: 'path_to_image_3' },
  { id: 4, name: 'Posters', image: 'path_to_image_4' },
];

function ProductCategories() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Choose a Product to Start</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <div key={category.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
