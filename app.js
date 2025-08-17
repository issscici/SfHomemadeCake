const PHONE_NUMBER = "60165980623"; 

const PRODUCTS = [
  { name: "English Lemon Cake", sizes: { "6寸": "70+", "8寸": "93+" }, img: "images/lemon.jpg" },
  { name: "Fruit Cake", sizes: { "6寸": "70+", "8寸": "93+" }, img: "images/fruit.jpg" },
  { name: "Mango Cake", sizes: { "6寸": "70+", "8寸": "93+"}, img: "images/mango.jpg" },
  { name: "Pandan Lychee Cake", sizes: { "6寸": "70+", "8寸": "93+" }, img: "images/pandan-lychee.jpg" },
  { name: "Pandan Longan Cake", sizes: { "6寸": "70+", "8寸": "93+" }, img: "images/pandan-longan.jpg" },
  { name: "Chocolate Indulgence Cake", sizes: { "6寸": "80+", "8寸": "105+" }, img: "images/choco-indulgence.jpg" },
  { name: "Mocha Cake", sizes: { "6寸": "80+", "8寸": "105+" }, img: "images/mocha.jpg" },
  { name: "Mocha Mix Chocolate Cake", sizes: { "6寸": "80+", "8寸": "105+"}, img: "images/mocha-mix.jpg" },
  { name: "Taro Cake", sizes: { "6寸": "80+", "8寸": "105+"}, img: "images/taro.jpg" },
  { name: "Matcha Cake", sizes: { "6寸": "80+", "8寸": "105+"}, img: "images/matcha.jpg" },
  { name: "Pandan Layer Cake", sizes: { "6寸": "78+", "8寸": "95+" }, img: "images/pandan-layer.jpg" },
  { name: "Chocolate Mint Cake", sizes: { "6寸": "58+", "8寸": "78+" }, img: "images/choco-mint.jpg" },
  { name: "Chocolate Cake", sizes: { "6寸": "58+", "8寸": "78+" }, img: "images/choco.jpg" },
  { name: "Pandan Cake", sizes: { "6寸": "50+", "8寸": "65+" }, img: "images/pandan.jpg" },
  { name: "Vanilla Cake", sizes: { "6寸": "50+", "8寸": "68+" }, img: "images/vanilla.jpg" },
  { name: "Oreo Cake", sizes: { "6寸": "78+", "8寸": "95+" }, img: "images/oreo.jpg" },
  { name: "Strawberry Cheese Cake", sizes: { "6寸": "90+", "8寸": "115+" }, img: "images/strawberry.jpg" }
];

const container = document.getElementById("products");

PRODUCTS.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";

  // 价格表 (6寸 / 8寸)
  let priceHtml = "";
  for (let size in p.sizes) {
    priceHtml += `<p>${size}: RM ${p.sizes[size]}</p>`;
  }

  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    ${priceHtml}
    <select class="size-select">
      ${Object.keys(p.sizes).map(size => `<option value="${size}">${size}</option>`).join("")}
    </select>
    <button class="order-btn">Order via WhatsApp</button>
  `;
  
  // 按钮点击事件
  div.querySelector(".order-btn").addEventListener("click", () => {
    const size = div.querySelector(".size-select").value;
    const price = p.sizes[size];
    const message = `Hello! I would like to order: ${p.name} (${size}, RM ${price}).`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });

  container.appendChild(div);
});
