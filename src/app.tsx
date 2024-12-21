"use client";
import { IRootState } from "@/stores";
import {
    toggleAnimation,
    toggleLayout,
    toggleMenu,
    toggleNavbar,
    toggleRTL,
    toggleSemidark,
    toggleTheme,
} from "@/stores/themeConfigSlice";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./layouts";

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(
            toggleTheme(localStorage.getItem("theme") || themeConfig.theme),
        );
        dispatch(
            toggleMenu(localStorage.getItem("horizontal") || themeConfig.menu),
        );
        dispatch(
            toggleLayout(localStorage.getItem("layout") || themeConfig.layout),
        );
        dispatch(
            toggleRTL(localStorage.getItem("rtlClass") || themeConfig.rtlClass),
        );
        dispatch(
            toggleAnimation(
                localStorage.getItem("animation") || themeConfig.animation,
            ),
        );
        dispatch(
            toggleNavbar(localStorage.getItem("navbar") || themeConfig.navbar),
        );
        dispatch(
            toggleSemidark(
                localStorage.getItem("semidark") || themeConfig.semidark,
            ),
        );
        setIsLoading(false);
    }, [
        dispatch,
        themeConfig.theme,
        themeConfig.menu,
        themeConfig.layout,
        themeConfig.rtlClass,
        themeConfig.animation,
        themeConfig.navbar,
        themeConfig.semidark,
    ]);

    return (
        <div
            className={`${(themeConfig.sidebar && "toggle-sidebar") || ""} ${themeConfig.menu} ${themeConfig.layout} ${
                themeConfig.rtlClass
            } main-section relative font-nunito text-sm font-normal antialiased`}
        >
            {isLoading ? <Loading /> : children}
        </div>
    );
}

export default App;
