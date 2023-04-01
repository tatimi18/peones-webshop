import React from 'react';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = () => {
    Fancybox.bind()
    return (
        <div>
            <div className="local-link" id="photogallery"></div>
            <section className="gallery">
                <div className="container_gallery">
                    <div className="title">Фотогалерея</div>
                    <div className="gallery__wrapper">
                        <a href="img/gallery/girl_1_big.jpg" data-fancybox>
                            <img src = "img/gallery/girl_1.jpg" alt ="girl_1" className="gallery__img gallery__img_without-padding"/>
                        </a>
                        <div className="gallery__wrapper-flowers">
                            <a href="img/gallery/fl_1_big.jpg" data-fancybox>
                                <img src="img/gallery/fl_1.jpg" alt ="flower_1" className="gallery__img gallery__img_fl"/>
                            </a>
                            <a href="img/gallery/fl_2.jpg" data-fancybox>
                                <img src="img/gallery/fl_2.jpg" alt ="flower_2" className="gallery__img gallery__img_fl"/>
                            </a>
                            <a href="./img/gallery/fl_3_big.jpg" data-fancybox>
                                <img src="img/gallery/fl_3.jpg" alt ="flower_3" className="gallery__img gallery__img_fl"/>
                            </a>
                            <a href="img/gallery/fl_4_big.jpg" data-fancybox>
                                <img src="img/gallery/fl_4.jpg" alt ="flower_4" className="gallery__img gallery__img_fl"/>
                            </a>
                            <a href="img/gallery/fl_5_big.jpg" data-fancybox>
                                <img src="img/gallery/fl_5.jpg" alt ="flower_5" className="gallery__img gallery__img_fl"/>
                            </a>
                        </div>
                            
                        <div className="gallery__wrapper-girls">
                            <a href="img/gallery/girl_2_big.jpg" data-fancybox>
                                <img src="img/gallery/girl_2.jpg" alt ="girl_2" className="gallery__img gallery__img_7"/>
                            </a>
                            <a href="img/gallery/girl_3_big.jpg" data-fancybox>
                                <img src="img/gallery/girl_3.jpg" alt ="girl_3" className="gallery__img gallery__img_8"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
