<template>
    <div>
        <div class="page-wrapper">
            <!-- Preloader -->
            <div class="preloader" style="display: none;" />

            <!-- Start main-content -->
            <section class="page-title bg-[url('/images/background/page-title.jpg')]">
                <div class="auto-container">
                    <div class="title-outer text-center">
                        <h1 class="title">
                            News Grid
                        </h1>
                        <ul class="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>News</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- end main-content -->

            <!-- News Section -->
            <section class="news-section">
                <div class="auto-container">
                    <div class="row">
                        <!-- News Block -->
                        <div class="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image">
                                        <a href="news-details.html"><img src="images/resource/news-1.jpg" alt=""></a>
                                    </figure>
                                    <a href="news-details.html" class="read-more"><i class="fa fa-arrow-right" /></a>
                                </div>
                                <div class="content-box">
                                    <div class="post-info">
                                        <span class="cat">UI/UX Strategy</span>
                                        <span class="date"><i class="far fa-calendar" /> Nov 25, 2023</span>
                                    </div>
                                    <h3 class="title">
                                        <a href="news-details.html">Voice Control Usability Consie Ways Partially Visually Hidden</a>
                                    </h3>
                                    <div class="author-box">
                                        <figure class="thumb">
                                            <img src="images/resource/avatar-1.jpg" alt="">
                                        </figure>
                                        <h6 class="name">
                                            Thomas P. Forbis
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- News Block -->
                        <div class="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInUp;">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image">
                                        <a href="news-details.html"><img src="images/resource/news-2.jpg" alt=""></a>
                                    </figure>
                                    <a href="news-details.html" class="read-more"><i class="fa fa-arrow-right" /></a>
                                </div>
                                <div class="content-box">
                                    <div class="post-info">
                                        <span class="cat">Branding Design</span>
                                        <span class="date"><i class="far fa-calendar" /> Nov 25, 2023</span>
                                    </div>
                                    <h3 class="title">
                                        <a href="news-details.html">Manage Design System Theme With CSS Color-Contrast Balanced</a>
                                    </h3>
                                    <div class="author-box">
                                        <figure class="thumb">
                                            <img src="images/resource/avatar-2.jpg" alt="">
                                        </figure>
                                        <h6 class="name">
                                            Bryan A. Costello
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--End News Section -->
        </div>
    </div>
</template>
