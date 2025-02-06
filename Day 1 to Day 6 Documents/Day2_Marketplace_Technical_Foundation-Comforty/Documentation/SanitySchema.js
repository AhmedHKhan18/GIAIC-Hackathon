export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Rental Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'rentalDuration', type: 'string', title: 'Rental Duration' },
      { name: 'depositAmount', type: 'number', title: 'Deposit Amount' },
      { name: 'conditionStatus', type: 'string', title: 'Condition Status' },
    ],
  };