import Image from "next/image";

export default function Transactions() {
  return (
    <div className="bg-bgSoft p-5 rounded-lg">
      <h2 className="font-extralight mb-5 text-textSoft text-xl ">
        Latest Transactions
      </h2>
      <table className="w-full table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-2.5 items-center">
              <Image
                className="object-cover rounded-full"
                src="/noavatar.png"
                alt="user"
                width="40"
                height="40"
              />
              Tata
            </td>
            <td>
              <span className="rounded-md p-1.5 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.10.2024</td>
            <td>₹4,800</td>
          </tr>

          <tr>
            <td className="flex gap-2.5 items-center">
              <Image
                className="object-cover rounded-full"
                src="/noavatar.png"
                alt="user"
                width="40"
                height="40"
              />
              Ratan
            </td>
            <td>
              <span className="rounded-md p-1.5 text-sm text-white bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td>14.10.2024</td>
            <td>₹4,800</td>
          </tr>

          <tr>
            <td className="flex gap-2.5 items-center">
              <Image
                className="object-cover rounded-full"
                src="/noavatar.png"
                alt="user"
                width="40"
                height="40"
              />
              Abdul
            </td>
            <td>
              <span className="rounded-md p-1.5 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.10.2024</td>
            <td>₹4,800</td>
          </tr>
          <tr>
            <td className="flex gap-2.5 items-center">
              <Image
                className="object-cover rounded-full"
                src="/noavatar.png"
                alt="user"
                width="40"
                height="40"
              />
              Kalam
            </td>
            <td>
              <span className="rounded-md p-1.5 text-sm text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td>14.10.2024</td>
            <td>₹4,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
