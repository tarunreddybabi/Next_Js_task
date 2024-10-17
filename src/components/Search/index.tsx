import { MdSearch } from "react-icons/md";

interface Props {
  placeholder: string;
}

export default function Search({ placeholder }: Props) {
  return (
    <div className="flex items-center gap-2.5 bg-lightBlack p-2.5 rounded-lg max-w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-white outline-none"
      />
    </div>
  );
}
