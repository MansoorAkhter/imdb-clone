'use client'
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), [])

    return (
        <div className='text-xl cursor-pointer hover:text-amber-500'>
            {mounted && (currentTheme === "dark" ? <MdLightMode onClick={() => setTheme("light")} /> : <BsFillMoonFill onClick={() => setTheme("dark")} />)}
        </div>
    );
};

export default DarkModeSwitch;
