// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const INITIAL_STATE = {
//   products: [],
//   totalItems: 0,
//   totalPrice: 0,
// };

// export const useCartStore = create(
//   persist<CartType & ActionTypes>(
//     (set, get) => ({
//       addToCart(item) {},
//       removeFromCart(item) {
//         set((state) => ({
//           products: state.products.filter((product) => product.id !== item.id),
//           totalItems: state.totalItems - item.quantity,
//           totalPrice: state.totalPrice - item.price,
//         }));
//       },
//       clearCart() {
//         set(INITIAL_STATE);
//       },
//     }),
//     { name: "cart", skipHydration: true }
//   )
// );
