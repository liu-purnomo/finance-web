"use client";
import {
    ContentAnimation,
    Loading,
    MainContainer,
    Overlay,
    Portals,
    ScrollToTop,
} from "@/layouts";
import Header from "@/layouts/header";
import Sidebar from "@/layouts/sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const session = useSession();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.replace("/auth/login?error=Login First");
        }

        if (session.status === "authenticated") {
            setLoading(false);
        }
    }, [session, router]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loading />;
            </div>
        );
    } else {
        return (
            <div className="relative">
                <Overlay />
                <ScrollToTop />

                <MainContainer>
                    {/* BEGIN SIDEBAR */}
                    <Sidebar />
                    {/* END SIDEBAR */}
                    <div className="main-content flex min-h-screen flex-col">
                        {/* BEGIN TOP NAVBAR */}
                        <Header />
                        {/* END TOP NAVBAR */}

                        {/* BEGIN CONTENT AREA */}
                        <ContentAnimation>{children}</ContentAnimation>
                        {/* END CONTENT AREA */}

                        {/* BEGIN FOOTER */}
                        {/* <Footer /> */}
                        {/* END FOOTER */}
                        <Portals />
                    </div>
                </MainContainer>
            </div>
        );
    }
}
