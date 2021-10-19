export const products = async (req, res) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = fetch(
    "http://localhost:5000/api/v1/products/:_id",
    requestOptions
  );
  const result = await response.json();

  const { title, price, desc01, desc02, f1, f2, f3, f4 } = result;
};
