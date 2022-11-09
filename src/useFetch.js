import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json)
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false)
        })();
    }, [url]);

    return { isLoading, data };
}

export default useFetch