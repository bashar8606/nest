import { useEffect } from "react";
import { useState } from "react";
import HelpCard from "../utils/HelpCard";
import Style from "./HomeHelp.module.scss";

const HomeHelp = ({ props }) => {
    const [newData, setNewData] = useState([])


  

    const colors = [
        {
            color: "#F4D3C9"
        }, {
            color: "#F4E6C7"
        }, {
            color: "#E2E2F5"
        },
    ]


    return (
        <section className={Style.ns_help_home}>
            <div className="container-fluid">
                <h2 className="h2">{props?.data?.title}</h2>

                <div className="row g-0 row-cols-lg-3">
                    {props?.data?.cards?.map(() => {
                        return (
                            <div>
                                <HelpCard />
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};
export default HomeHelp;