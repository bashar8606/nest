import Image from "next/image";
import Style from "./HomeAbout.module.scss";
import Assets from "../Layout/CommonLayout/assets";

const HomeAbout = ({ props }) => {
    return (
        <section className={Style.ns_about_home}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className={`col-12 ${Style.col_left}`}>
                        <div className={Style.img_wrap}>
                            <div className="ratio">
                                <Image src={Assets.banner_about} fill alt="cover" />
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 ${Style.col_right}`}>
                        <div className={Style.content_wrap}>
                            <h6>Our Story</h6>
                            <h3 className="h2">Underserved peoples</h3>

                            <p>Veterinarians & pet owners in the Middle East & North Africa are underserved, with insufficient equipment and treatment options to provide the level of care our pets deserve</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeAbout;