import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                const names = data.map(user => user.name); 
                setUserNames(names);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error, userNames };
}