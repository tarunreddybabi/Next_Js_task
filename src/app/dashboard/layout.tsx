import { Sidebar, Navbar, Footer } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="flex-[1] p-5 bg-bgSoft min-h-screen">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
