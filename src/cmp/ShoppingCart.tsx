import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i: any) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

// Stacks (react-bootstrap) are vertical by default and stacked items are full-width by default. Use the gap prop to add space between items. First item. Second item. Third item.

// Offcanvas (react-bootstrap).
// - Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down.Above that breakpoint, the contents within will behave as usual.

//  - Build hidden sidebars into your project for navigation, shopping carts, and more.Example Offcanvas includes support for a header with a close button and an optional body class for some initial padding.We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.
