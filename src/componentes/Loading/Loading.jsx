import React, { useState, useEffect } from "react";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="container">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : null}
        </div>
    );
}

export default Loading;