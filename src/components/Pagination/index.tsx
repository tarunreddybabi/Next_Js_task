"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";
  const params = new URLSearchParams(searchParams);
  const Item_Per_Page = 2;

  const hasPrev = Item_Per_Page * (parseInt(page) - 1) > 0;

  const hasNext = Item_Per_Page * (parseInt(page) - 1) + Item_Per_Page < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between p-2.5">
      <button
        className={`bg-white text-black py-1.5 px-2.5 cursor-pointer ${
          !hasPrev ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          if (hasPrev) handleChangePage("prev");
        }}
      >
        Previous
      </button>
      <button
        className={`bg-white text-black py-1.5 px-2.5 cursor-pointer ${
          !hasNext ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          if (hasNext) handleChangePage("next");
        }}
      >
        Next
      </button>
    </div>
  );
}
