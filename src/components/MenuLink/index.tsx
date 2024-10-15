'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export default function MenuLink({ item }: { item: MenuItem }) {

  const pathName=usePathname()
  return (
    <Link href={item.path} className={`flex items-center gap-2.5 p-5 rounded-lg my-1.5 mx-0 hover:bg-lightBlack hover:cursor-pointer ${pathName===item.path?"bg-lightBlack":""}`}>
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}
