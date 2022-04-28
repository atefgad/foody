export const category = {
  pizza: "pizza",
  burger: "burger",
  drinks: "drinks",
  dessert: "dessert",
};

const Api = {
  getProducts: (type, data) => {
    if (type === "all") {
      return data;
    } else {
      return data.filter((product) => product.category === type);
    }
  },
  imagesURL: () => "https://api.atef-gad.com/products",
};

export default Api;
