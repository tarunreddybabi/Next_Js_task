import { Pagination, Search } from "@/components";
import { fetchProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async () => {
  let products;
  try {
    products = await fetchProducts();
  } catch (error) {
    return <div>Error fetching users.</div>;
  }

  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between mb-5">
        <Search placeholder={"Search for a product"} />
        <Link href="/dashboard/products/addproduct">
          <button className="p-2.5 bg-[#5d57c9] border-none rounded-md cursor-pointer text-white">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={product.img || "./noavatar.png"}
                      alt="no image"
                      height={40}
                      width={40}
                      className="rounded-full object-cover"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex gap-2.5">
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className="py-1.5 px-2.5 rounded-md text-white border-none cursor-pointer bg-teal-500">
                        View
                      </button>
                    </Link>
                    <button className="py-1.5 px-2.5 rounded-md text-white border-none cursor-pointer bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
