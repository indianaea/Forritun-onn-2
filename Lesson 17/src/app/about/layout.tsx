"use client";
import { HeaderComponent } from "../routers";

export default function MyGirlLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>
            this is my girl layout
            {children}
        </section>
    );
}