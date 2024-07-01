import React, { useEffect } from "react";
import { useFetchAdvertQuery } from "../redux/slices/advertSlice";


const HomePage = () => {
    const { data:advertState } = useFetchAdvertQuery(undefined, { skip: false });

    useEffect(() => {
        console.log(advertState);
    }, [advertState]);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;