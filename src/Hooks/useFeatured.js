import { useEffect, useState } from "react";

const useFeatured = () => {
    const [featured, setFeatured] = useState([]).slice(0, 3);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])
    return [featured];
}
export default useFeatured;