<template>
    <div class="bg-transparent w-full ">
        <div class="relative partner-carousel px-2 pb-3 mt-1 z-10 sm:px-5">
            <VueSlickCarousel key="partner-list" ref="SliderCarousel" v-bind="settings" class="">
                <div class="testimonial-block">
                    <div class="inner-box">
                        <figure class="image">
                            <img src="/images/resource/testi-5.jpg" alt="">
                        </figure>
                        <div class="content-box">
                            <div class="upper-box">
                                <span class="icon icon-quote" />
                                <div class="rating-box">
                                    <span class="reason">Good Quality</span>
                                    <div class="rating">
                                        <i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                Sed ut perspiciatis unde natus error sit voluptatem accusantium
                                laudant totam aperiam eaque abillo inventore veritatis et quasi architecto
                                beatae vitae
                            </div>
                            <div class="info-box">
                                <span class="icon-chat" />
                                <h4 class="name">
                                    Gars G. Bernhardt
                                </h4>
                                <span class="designation">CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-block">
                    <div class="inner-box">
                        <figure class="image">
                            <img src="/images/resource/testi-5.jpg" alt="">
                        </figure>
                        <div class="content-box">
                            <div class="upper-box">
                                <span class="icon icon-quote" />
                                <div class="rating-box">
                                    <span class="reason">Good Quality</span>
                                    <div class="rating">
                                        <i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                Sed ut perspiciatis unde natus error sit voluptatem accusantium
                                laudant totam aperiam eaque abillo inventore veritatis et quasi architecto
                                beatae vitae
                            </div>
                            <div class="info-box">
                                <span class="icon-chat" />
                                <h4 class="name">
                                    Gars G. Bernhardt
                                </h4>
                                <span class="designation">CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-block">
                    <div class="inner-box">
                        <figure class="image">
                            <img src="/images/resource/testi-5.jpg" alt="">
                        </figure>
                        <div class="content-box">
                            <div class="upper-box">
                                <span class="icon icon-quote" />
                                <div class="rating-box">
                                    <span class="reason">Good Quality</span>
                                    <div class="rating">
                                        <i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                Sed ut perspiciatis unde natus error sit voluptatem accusantium
                                laudant totam aperiam eaque abillo inventore veritatis et quasi architecto
                                beatae vitae
                            </div>
                            <div class="info-box">
                                <span class="icon-chat" />
                                <h4 class="name">
                                    Gars G. Bernhardt
                                </h4>
                                <span class="designation">CEO & Founder</span>
                            </div>
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // responsive: [
                    //     {
                    //         breakpoint: 1080,
                    //         settings: {
                    //             slidesToShow: 4,
                    //             slidesToScroll: 4,
                    //         },
                    //     },
                    //     {
                    //         breakpoint: 800,
                    //         settings: {
                    //             slidesToScroll: 3,
                    //             slidesToShow: 3,
                    //             arrows: false,
                    //         },
                    //     },
                    //     {
                    //         breakpoint: 640,
                    //         settings: {
                    //             slidesToShow: 2,
                    //             slidesToScroll: 1,
                    //             arrows: false,
                    //         },
                    //     },
                    // ],
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
