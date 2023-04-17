function calculatePrice(productPrice, commissionRate) {
  let totalPrice = productPrice + (productPrice * commissionRate);
  let commission = totalPrice * commissionRate;
  let requiredPrice = productPrice + commission;
  return requiredPrice;
}

// Örnek kullanım:
let productPrice = 1000; // Ürün fiyatı
let commissionRate = 0.0365; // Komisyon oranı
let requiredPrice = calculatePrice(productPrice, commissionRate);
console.log(`Ürünün satılması gereken fiyatı: ${requiredPrice} TL`);
