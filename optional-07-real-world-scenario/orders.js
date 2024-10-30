// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(newOrder);
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};