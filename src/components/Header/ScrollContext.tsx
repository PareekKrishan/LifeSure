import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define context type
export const ScrollContext = createContext<boolean>(false); // Default value `false`

// Define the provider's props type to accept children
interface ScrollProviderProps {
    children: ReactNode;
}

// Create Context Provider
export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider value={scrolled}>
            {children}
        </ScrollContext.Provider>
    );
};
