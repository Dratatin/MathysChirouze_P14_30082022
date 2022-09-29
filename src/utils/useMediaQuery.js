import { useEffect, useState, useCallback } from "react";

// export const useWindowSize = () => {
//     function getSize() {
//         return {
//             width: window.innerWidth,
//             height: window.innerHeight
//         };
//     }

//     const [windowSize, setWindowSize] = useState(getSize);

//     useEffect(() => {
//         function handleResize() {
//             setWindowSize(getSize());
//         }
//         window.addEventListener("resize", handleResize);

//         return () => window.removeEventListener("resize", handleResize);
//     }, []); // Empty array ensures that effect is only run on mount and unmount
//     return windowSize;
// }

export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener("change", updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
};