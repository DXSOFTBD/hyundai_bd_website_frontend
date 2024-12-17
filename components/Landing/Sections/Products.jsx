"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaStar, FaShoppingCart } from 'react-icons/fa';

const BestSellingProducts = () => {
    const products = [
        {
            id: 1,
            name: "Split Air Conditioner",
            description: "Advanced cooling system with smart temperature control",
            image: "/products/product-1.png",
            price: "$750.00",
            oldPrice: "$850.00",
            rating: 5,
            reviews: 150,
            tag: "Sale"
        },
        {
            id: 2,
            name: "Cassette Air Conditioner",
            description: "Whisper-quiet operation with powerful cooling",
            image: "/products/product-2.png",
            price: "$950.00",
            oldPrice: "$1050.00",
            rating: 4.8,
            reviews: 120,
            tag: "New"
        },
        {
            id: 3,
            name: "Window Air Conditioner",
            description: "Compact and efficient cooling solution",
            image: "/products/product-3.png",
            price: "$550.00",
            oldPrice: "$650.00",
            rating: 4.9,
            reviews: 180,
            tag: "Popular"
        },
        {
            id: 4,
            name: "Window Air Conditioner",
            description: "Compact and efficient cooling solution",
            image: "/products/product-4.png",
            price: "$550.00",
            oldPrice: "$650.00",
            rating: 4.9,
            reviews: 180,
            tag: "Popular"
        },
        {
            id: 5,
            name: "Window Air Conditioner",
            description: "Compact and efficient cooling solution",
            image: "/products/product-5.png",
            price: "$550.00",
            oldPrice: "$650.00",
            rating: 4.9,
            reviews: 180,
            tag: "Popular"
        },
        {
            id: 6,
            name: "Window Air Conditioner",
            description: "Compact and efficient cooling solution",
            image: "/products/product-6.png",
            price: "$550.00",
            oldPrice: "$650.00",
            rating: 4.9,
            reviews: 180,
            tag: "Popular"
        }
    ];

    return (
        <section className="py-24 bg-[#234982]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* <span className="text-blue-600 font-medium mb-4 block">
                        Our Products
                    </span> */}
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        Best Selling Products
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="rounded-lg overflow-hidden group"
                        >
                            {/* Product Image Container */}
                            <div className="relative h-96 bg-[#1C3A68] p-10  overflow-hidden">
                                {/* Sale Tag */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full">
                                        {product.tag}
                                    </span>
                                </div>

                                {/* Product Image */}
                                <motion.div
                                    className="relative h-full w-full p-10"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>

                                <div className="absolute bottom-4 right-6 z-10">
                                    <span className="text-white text-lg px-4 py-2 font-semibold">
                                        {product.name}
                                    </span>

                                </div>

                                {/* Quick View Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                                    >
                                        Quick View
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Product Info */}
                            {/* <div className="p-8">
                                
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">
                                        ({product.reviews} Reviews)
                                    </span>
                                </div>

                                
                                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>

                                
                                <p className="text-gray-600 mb-4">
                                    {product.description}
                                </p>

                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-blue-600">
                                            {product.price}
                                        </span>
                                        <span className="text-gray-400 line-through">
                                            {product.oldPrice}
                                        </span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <FaShoppingCart className="text-lg" />
                                    </motion.button>
                                </div>
                            </div> */}
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                        View All Products
                        <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default BestSellingProducts;


// "use client"
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from '@mui/material';
// import { FaArrowRight, FaStar } from 'react-icons/fa';

// const BestSellingProducts = () => {
//     const products = [
//         {
//             id: 1,
//             name: "Split AC 1.5 Ton",
//             rating: 5,
//             reviews: 128,
//             oldPrice: "$1,299",
//             newPrice: "$999",
//             image: "/Products/ac1.png",
//             tag: "Best Seller"
//         },
//         {
//             id: 2,
//             name: "Inverter AC 2 Ton",
//             rating: 4.8,
//             reviews: 96,
//             oldPrice: "$1,599",
//             newPrice: "$1,299",
//             image: "/Products/ac1.png",
//             tag: "New Arrival"
//         },
//         {
//             id: 3,
//             name: "Window AC 1 Ton",
//             rating: 4.9,
//             reviews: 156,
//             oldPrice: "$899",
//             newPrice: "$699",
//             image: "/Products/ac1.png",
//             tag: "Popular"
//         }
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5
//             }
//         }
//     };

//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center max-w-3xl mx-auto mb-16"
//                 >
//                     <span className="text-blue-600 font-semibold mb-2 block">
//                         Featured Products
//                     </span>
//                     <h2 className="text-4xl font-bold mb-4">
//                         Best Selling Products
//                     </h2>
//                     <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
//                     <p className="text-gray-600">
//                         Discover our most popular air conditioning solutions trusted by thousands of satisfied customers.
//                     </p>
//                 </motion.div>

//                 {/* Products Grid */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
//                 >
//                     {products.map((product) => (
//                         <motion.div
//                             key={product.id}
//                             variants={itemVariants}
//                             className="bg-white rounded-lg shadow-lg overflow-hidden group relative"
//                         >
//                             {/* Product Tag */}
//                             <div className="absolute top-4 left-4 z-10">
//                                 <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
//                                     {product.tag}
//                                 </span>
//                             </div>

//                             {/* Product Image */}
//                             <div className="relative h-72 bg-gray-100">
//                                 <Image
//                                     src={product.image}
//                                     alt={product.name}
//                                     fill
//                                     className="object-contain p-8 group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>

//                             {/* Product Info */}
//                             <div className="p-6">
//                                 {/* Rating */}
//                                 <div className="flex items-center gap-2 mb-3">
//                                     <div className="flex text-yellow-400">
//                                         {[...Array(5)].map((_, i) => (
//                                             <FaStar
//                                                 key={i}
//                                                 className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
//                                             />
//                                         ))}
//                                     </div>
//                                     <span className="text-gray-600 text-sm">
//                                         ({product.reviews} Reviews)
//                                     </span>
//                                 </div>

//                                 {/* Product Name */}
//                                 <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
//                                     {product.name}
//                                 </h3>

//                                 {/* Price */}
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <span className="text-2xl font-bold text-blue-600">
//                                         {product.newPrice}
//                                     </span>
//                                     <span className="text-gray-400 line-through">
//                                         {product.oldPrice}
//                                     </span>
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="flex gap-3">
//                                     <motion.div
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                         className="flex-1"
//                                     >
//                                         <Button
//                                             variant="contained"
//                                             fullWidth
//                                             className="bg-blue-600 hover:bg-blue-700 text-white py-3"
//                                         >
//                                             Add to Cart
//                                         </Button>
//                                     </motion.div>
//                                     <motion.div
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         <Button
//                                             variant="outlined"
//                                             className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white p-3 min-w-[50px]"
//                                         >
//                                             <FaArrowRight />
//                                         </Button>
//                                     </motion.div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* View All Button */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="text-center mt-12"
//                 >
//                     <Button
//                         variant="outlined"
//                         endIcon={<FaArrowRight />}
//                         className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
//                     >
//                         View All Products
//                     </Button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default BestSellingProducts;