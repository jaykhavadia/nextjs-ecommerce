import RequireAuth from "@/components/RequireAuth";
import CartPageClient from "./CartPageClient";
import { fetcher } from "@/utils/fetcher";
import { CartItem } from "@/contexts/CartContext";

async function fetchCartData(): Promise<CartItem[]> {
  try {
    const { data } = await fetcher.get<any>("/cart");
    console.log("🚀 ~ fetchCartData ~ data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch cart data:", error);
    return [];
  }
}

export default async function CartPage() {
  const cartData = await fetchCartData();
  console.log("🚀 ~ CartPage ~ cartData:", cartData)

  return (
    <RequireAuth>
      <CartProvider initialCart={cartData}>
        <CartPageClient />
      </CartProvider>
    </RequireAuth>
  );
}

import { CartProvider } from "@/contexts/CartContext";
