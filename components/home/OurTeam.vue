<template>
    <div class="bg-transparent w-full ">
        <div class="relative partner-carousel px-2 pb-3 mt-1 z-10 sm:px-5">
            <VueSlickCarousel key="partner-list" ref="SliderCarousel" v-bind="settings" class="">
                <div class="team-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <a href="page-team-details.html"><img src="/images/resource/team-1.jpg" alt=""></a>
                            </figure>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-twitter" /></a>
                                <a href="#"><i class="fab fa-facebook-f" /></a>
                                <a href="#"><i class="fab fa-pinterest-p" /></a>
                                <a href="#"><i class="fab fa-instagram" /></a>
                            </div>
                            <span class="share-icon fas fa-share-alt" />
                        </div>
                        <div class="info-box">
                            <span class="designation">designer</span>
                            <h4 class="name">
                                <a href="page-team-details.html">Aleesha brown</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="team-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <a href="page-team-details.html"><img src="/images/resource/team-2.jpg" alt=""></a>
                            </figure>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-twitter" /></a>
                                <a href="#"><i class="fab fa-facebook-f" /></a>
                                <a href="#"><i class="fab fa-pinterest-p" /></a>
                                <a href="#"><i class="fab fa-instagram" /></a>
                            </div>
                            <span class="share-icon fas fa-share-alt" />
                        </div>
                        <div class="info-box">
                            <span class="designation">Co founder of mizox</span>
                            <h4 class="name">
                                <a href="page-team-details.html">Kevin martin</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="team-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <a href="page-team-details.html"><img src="/images/resource/team-3.jpg" alt=""></a>
                            </figure>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-twitter" /></a>
                                <a href="#"><i class="fab fa-facebook-f" /></a>
                                <a href="#"><i class="fab fa-pinterest-p" /></a>
                                <a href="#"><i class="fab fa-instagram" /></a>
                            </div>
                            <span class="share-icon fas fa-share-alt" />
                        </div>
                        <div class="info-box">
                            <span class="designation">designer</span>
                            <h4 class="name">
                                <a href="page-team-details.html">Christine eve</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="team-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <a href="page-team-details.html"><img src="/images/resource/team-1.jpg" alt=""></a>
                            </figure>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-twitter" /></a>
                                <a href="#"><i class="fab fa-facebook-f" /></a>
                                <a href="#"><i class="fab fa-pinterest-p" /></a>
                                <a href="#"><i class="fab fa-instagram" /></a>
                            </div>
                            <span class="share-icon fas fa-share-alt" />
                        </div>
                        <div class="info-box">
                            <span class="designation">designer</span>
                            <h4 class="name">
                                <a href="page-team-details.html">Aleesha brown</a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="team-block-two">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <a href="page-team-details.html"><img src="/images/resource/team-2.jpg" alt=""></a>
                            </figure>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-twitter" /></a>
                                <a href="#"><i class="fab fa-facebook-f" /></a>
                                <a href="#"><i class="fab fa-pinterest-p" /></a>
                                <a href="#"><i class="fab fa-instagram" /></a>
                            </div>
                            <span class="share-icon fas fa-share-alt" />
                        </div>
                        <div class="info-box">
                            <span class="designation">Co founder of mizox</span>
                            <h4 class="name">
                                <a href="page-team-details.html">Kevin martin</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <template #prevArrow>
                    <div slot="prev-arrow" class="absolute !top-[115%] !left-[44%] lg:!left-[47%] sm:pl-0 z-[100]">
                        <a-icon type="left" class="text-4xl !text-black-100/20 hover:!text-black-100 duration-200 cursor-pointer mr-3" />
                    </div>
                </template>
                <template #nextArrow>
                    <div slot="next-arrow" class="absolute !top-[115%] !right-[44%] lg:!right-[48%] sm:pl-0 z-[100]">
                        <a-icon type="right" class="text-4xl !text-black-100/20 hover:!text-black-100 duration-200 cursor-pointer" />
                    </div>
                </template>

                <template #customPaging>
                    <div slot="custom-paging" class="mt-4">
                        <span class="block mx-auto w-2 h-2 rounded-full bg-gray-80 duration-300" />
                    </div>
                </template>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';

    export default {
        components: { VueSlickCarousel },

        data() {
            return {
                settings: {
                    speed: 300,
                    dots: false,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                            },
                        },
                    ],
                },
            };
        },
    };
</script>
<style lang="scss">
    .partner-carousel {
        .slick-prev:before, .slick-next:before {
            content: '' !important;
        }
        .slick-list {
            padding: 10px 0px !important;
        }
        .slick-slide {
            padding: 0px 10px !important;
        }
        .slick-slider {
            @apply  ml-[-95px] mr-[-60px] #{!important};
        }
    }
</style>
