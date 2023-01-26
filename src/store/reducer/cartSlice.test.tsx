import cartSlice, {
  addToCart,
  removeFromCart,
  increment,
  decrement,
} from "./cartSlice";

interface CartItem {
  id: string;
  count: number;
}

describe("cartSlice", () => {
  let initialState = [] as CartItem[];
  beforeEach(() => {
    initialState = [];
  });

  it("should handle addToCart", () => {
    const item = { id: "1", count: 1 };
    const newState = cartSlice(initialState, addToCart(item));
    expect(newState).toEqual([item]);
  });

  it("should handle removeFromCart", () => {
    const item = { id: "1", count: 1 };
    const newState = cartSlice([item], removeFromCart(item));
    expect(newState).toEqual([]);
  });

  it("should handle increment", () => {
    const item = { id: "1", count: 1 };
    const newState = cartSlice([item], increment(item));
    expect(newState).toEqual([{ id: "1", count: 2 }]);
  });

  it("should handle decrement", () => {
    const item = { id: "1", count: 2 };
    const newState = cartSlice([item], decrement(item));
    expect(newState).toEqual([{ id: "1", count: 1 }]);
  });
});
