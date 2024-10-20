import { Pagination, Search } from "@/components";
import { deleteProduct } from "@/lib/actions";
import { fetchProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface SearchParams {
  q?: string | string[];
  page?: string | string[];
}

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = Array.isArray(searchParams?.q)
    ? searchParams.q[0]
    : searchParams?.q || "";
  const page = parseInt(
    Array.isArray(searchParams?.page)
      ? searchParams.page[0]
      : searchParams?.page || "1"
  );

  try {
    const { count, products } = await fetchProducts(q, page);

    return (
      <div className="bg-bgSoft p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between mb-5">
          <Search placeholder={"Search for a product"} />
          <Link href="/products/addproduct">
            <button className="p-2.5 bg-[#5d57c9] border-none rounded-md cursor-pointer text-white">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full table">
          <thead>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <Image
                      src={product.img || "/noavatar.png"}
                      alt="Product image"
                      height={40}
                      width={40}
                      className="rounded-full object-cover"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.desc}</td>
                  <td>₹{" "}{product.price.toFixed(2)}</td>
                  <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="flex gap-2.5">
                      <Link href={`/products/${product._id}`}>
                        <button className="py-1.5 px-2.5 rounded-md text-white border-none cursor-pointer bg-teal-500">
                          View
                        </button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product._id} />
                      <button className="py-1.5 px-2.5 rounded-md text-white border-none cursor-pointer bg-red-600">
                        Delete
                      </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error fetching products.</div>;
  }
};

export default ProductsPage;
