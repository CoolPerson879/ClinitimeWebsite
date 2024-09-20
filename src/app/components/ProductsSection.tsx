"use client";

import * as motion from "framer-motion/client";

const ProductsSection = () => {
  const productVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
        {/* Product 1 */}
        <motion.div
          className="text-center"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/2.png"
            alt="Product 1"
            className="w-full h-100 object-cover rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">View Data</h3>
          <p className="text-gray-600 mb-4">
            View your data in a simple interface.
          </p>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          className="text-center"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/3.png"
            alt="Product 2"
            className="w-full h-100 object-cover rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Categorize Data</h3>
          <p className="text-gray-600 mb-4">
            Organize your data into categories.
          </p>
        </motion.div>

        {/* Product 3 */}
        <motion.div
          className="text-center"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/5.png"
            alt="Product 3"
            className="w-full h-100 object-cover rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Analyze Data</h3>
          <p className="text-gray-600 mb-4">
            Analyze your trends in each category.
          </p>
        </motion.div>

        {/* Product 4 */}
        <motion.div
          className="text-center"
          variants={productVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/4.png"
            alt="Product 4"
            className="w-full h-100 object-cover rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-2xl font-semibold">Add Data</h3>
          <p className="text-gray-600 mb-4">
            Adding Data is very simple with this easy to use interface.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
