// CASOS DE USO DOS ITENS

// -> Criar item com subtotal certo
export async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
}
