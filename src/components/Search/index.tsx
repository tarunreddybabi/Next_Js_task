"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  placeholder: string;
}

export default function Search({ placeholder }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");

      if (e.target.value) {
        if (e.target.value.length > 2) {
          params.set("q", e.target.value);
        }
      } else {
        params.delete("q");
      }

      replace(`${pathname}?${params}`);
    },
    300
  );

  return (
    <div className="flex items-center gap-2.5 bg-lightBlack p-2.5 rounded-lg max-w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        className="bg-transparent border-none text-white outline-none"
      />
    </div>
  );
}
