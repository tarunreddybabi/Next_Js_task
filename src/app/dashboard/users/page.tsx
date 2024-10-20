import { Pagination, Search } from "@/components";
import { deleteUser } from "@/lib/actions";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface SearchParams {
  q?: string | string[];
  page?: string | string[];
}

const UsersPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const q = Array.isArray(searchParams?.q)
    ? searchParams.q[0]
    : searchParams?.q || "";
  const page = parseInt(
    Array.isArray(searchParams?.page)
      ? searchParams.page[0]
      : searchParams?.page || "1"
  );

  try {
    const { count, users } = await fetchUsers(q, page);

    return (
      <div className="bg-bgSoft p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between mb-5">
          <Search placeholder={"Search for a user"} />
          <Link href="/dashboard/users/adduser">
            <button className="p-2.5 bg-[#5d57c9] border-none rounded-md cursor-pointer text-white">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={user.img || "/noproduct.jpg"}
                        alt="no image"
                        height={40}
                        width={40}
                        className="rounded-full object-cover"
                      />
                      {user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>{user.isAdmin === "true" ? "Admin" : "User"}</td>
                  <td>{user.isActive === "true" ? "Active" : "Passive"}</td>
                  <td>
                    <div className="flex gap-2.5">
                      <Link href={`/dashboard/users/${user._id}`}>
                        <button className="py-1.5 px-2.5 rounded-md text-white border-none cursor-pointer bg-teal-500">
                          View
                        </button>
                      </Link>
                      <form action={deleteUser}>
                        <input type="hidden" name="id" value={user._id}/>
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
    return <div>Error fetching users.</div>;
  }
};

export default UsersPage;
