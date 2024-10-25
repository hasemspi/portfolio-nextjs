// Components/context/themeswitch.tsx
"use client";

import React from 'react';
import { useTheme } from "next-themes";

const ThemeSwitchProvider = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div>
            <input
                type="checkbox"
                className="toggle border-blue-500 bg-slate-500 [--tglbg:white] hover:bg-blue-700"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
        </div>
    );
};

export default ThemeSwitchProvider;
