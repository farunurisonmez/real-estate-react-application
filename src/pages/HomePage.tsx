import React, { useEffect, useState } from "react";
import { useFetchAdvertQuery } from "../redux/slices/advertSlice";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const { data: adverts, refetch } = useFetchAdvertQuery({search}, { skip: false });
    const [word, setWord] = useState("");

    const findSearch = (e: any) => {
        setWord(e.target.value);
        console.log(e.target.value);
    }


    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            setSearch(word);
            refetch();
        }
    }

    useEffect(() => {
        console.log(adverts);
    }, [adverts]);

    return (
        <>
            <div className="banner d-flex align-items-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
                <div className="bg-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="banner-area text-center pt-4 pb-4">
                                    <h2 className="mt-2 mb-4 banner-title"><strong> Ev Arıyorsan </strong> </h2>
                                    <div className="search-area">
                                        <div className="input-group">
                                            <input
                                                onChange={findSearch}
                                                onKeyPress={handleKeyPress}
                                                type="text"
                                                className="form-control"
                                                placeholder="İlan Adı, İl, ilçe, mahalle, site, okul, metro..."
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary" type="button">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-md">
                {
                    //@ts-ignore
                    adverts?.map((res: any) => (
                        <div className="adverts_wrapper">
                            <div className="box">
                                <div className="top">
                                    <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg" alt="" />
                                </div>
                                <div className="bottom">
                                    <h3>{res.advertName}</h3>
                                    <div className="advants">
                                        <div>
                                            <span>{res.name}</span>
                                            <div><i className="fas fa-th-large"></i><span>3</span></div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Satılık</span>
                                        <span>{res.unitPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default HomePage;
