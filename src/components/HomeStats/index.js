import Style from "./HomeStats.module.scss";

const HomeStats = ({ props }) => {
    return (
        <section className={Style.ns_stats_home}>
            <div className="container-fluid">

                <div className="row row-cols-lg-2">
                    <div className={Style.col_left}>

                        <div className={Style.content_wrap}>
                            <h2 className="h2">The MENA pet health market in numbers</h2>
                        </div>
                    </div>
                    <div className={Style.col_right}>
                        <div className={`${Style.stat_col} d-flex flex-column justify-content-between`}>
                            <div className={Style.stat_col_one}>
                                <h4 className="h4">Facts and figures about the MENA health market are very hard to find</h4>
                                <a href="" className="btn btn-outline-primary">Learn More</a>
                            </div>
                            <div className={Style.stat_col_two}>
                                <p className="ms-lg-auto w-lg-50">The Nestu team has detailed the landscape through extensive interviews & surveys with clients, veterinarians, and pet owners</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default HomeStats;