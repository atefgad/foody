export const category = {
  pizza: "pizza",
  burger: "burger",
  drinks: "drinks",
  dessert: "dessert",
};

const Api = {
  getProductsByCat: (type, params) => {
    const filtered = params.filter((product) => product.category === type);
    return filtered;
  },
  imagesURL: () => "https://api.atef-gad.com/products",
};

export default Api;
