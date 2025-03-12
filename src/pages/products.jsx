// import { Fragment, useState } from "react";
// import CardProduct from "../components/fragments/CardProduct";
// import Button from "../components/elements/button/index";
// import Counter from "../components/fragments/Counter";

// const products = [
//     {
//         id: 1,
//         product: "Rabbit",
//         price: 100000,
//         image: "/image/foto-1.jpg",
//     },
// ];

// const username = localStorage.getItem('username');

// const ProductsPage = () => {

//     const [cart, setCart] = useState([
//         {
//             name: "Rabbit",
//             qty: 1,

//         }
//     ]);

//     const handleLogout = () => {
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//         window.location.href = '/login';
//     }


//     return (
//         <Fragment>
//         <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
//             {username}
//             <Button classname="bg-black w-52 m-5" onClick={handleLogout}>
//                 Logout</Button>
//         </div>
//         <div className="flex justify-center py-5">
//             {products.map((product) => (
//                 <CardProduct key={product.id}>
//                     <CardProduct.Header image={product.image}/>
//                     <CardProduct.Body product={product.product}>
//                         {product.description}
//                     </CardProduct.Body>
//                 </CardProduct>
//             ))}
//         </div>
//         <div className="flex justify-center w-100">
//             <Counter></Counter>
//         </div>
//         </Fragment>
//     );
// }

// export default ProductsPage;