const ProductsPage = async () => {
  const products = await fetch(
    `https://www.api.uliakom.site/wp-json/wc/v3/products`,
    {
      headers: {
        Authorization: `Bearer ${process.env.WORDPRESS_API_KEY}`,
      },
    },
  );

  return <div>ProductsP</div>;
};

export default ProductsPage;
