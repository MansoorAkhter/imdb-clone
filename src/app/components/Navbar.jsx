'use client'
import Link from "next/link";
import React from "react";
import { useSearchParams } from 'next/navigation';

const Navbar = () => {


    return (
        <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    );
};

export default Navbar;

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre")
    return (
        <div>
            <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500"}`} href={`/?genre=${param}`}>{title}</Link>
        </div>
    )
}