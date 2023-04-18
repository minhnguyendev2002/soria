<template>
    <div class="overflow-hidden">
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
        <div class="py-20">
            <h2 class="my-10 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 justify-center">
                Liên hệ
            </h2>
            <div class="auto-container max-w-7xl mx-auto">
                <div class="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div class="max-w-sm space-y-8">
                        <div>
                            <h3 class="uppercase font-semibold text-sm tracking-wider">
                                🗺 Địa chỉ
                            </h3><span class="block mt-2 text-neutral-500">Mỹ Đình 2, Nam Từ Liêm, Hà Nội</span>
                        </div><div>
                            <h3 class="uppercase font-semibold text-sm tracking-wider">
                                💌 Email
                            </h3><span class="block mt-2 text-neutral-500">soria@gmail.com</span>
                        </div><div>
                            <h3 class="uppercase font-semibold text-sm tracking-wider">
                                ☎ Hotline
                            </h3><span class="block mt-2 text-neutral-500">000-123-456-7890</span>
                        </div><div>
                            <h3 class="uppercase font-semibold text-sm tracking-wider">
                                🌏 Soria trên các nền tảng
                            </h3><nav class="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 mt-2" data-nc-id="SocialsList">
                                <a
                                    class="block w-6 h-6"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                ><img src="https://chisnghiax.com/ciseco/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg" alt=""></a><a
                                    class="block w-6 h-6"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter"
                                ><img src="https://chisnghiax.com/ciseco/static/media/twitter.f56ce1bc9eb5120250ac80ed561cf82f.svg" alt=""></a><a
                                    class="block w-6 h-6"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Youtube"
                                ><img src="https://chisnghiax.com/ciseco/static/media/youtube.bb2387598b5621f3a2e92ab928da4fe0.svg" alt=""></a><a
                                    class="block w-6 h-6"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Telegram"
                                ><img src="https://chisnghiax.com/ciseco/static/media/telegram.5acad1587076bc12320cadff0f4aa3f3.svg" alt=""></a>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <a-form-model
                            ref="contactForm"
                            :model="form"
                            :rules="rules"
                        >
                            <a-form-model-item has-feedback label="Họ và tên của bạn" prop="fullName">
                                <a-input v-model="form.fullName" placeholder="Họ tên" />
                            </a-form-model-item>
                            <a-form-model-item has-feedback label="Email của bạn" prop="email">
                                <a-input v-model="form.email" placeholder="Email" />
                            </a-form-model-item>
                            <a-form-model-item has-feedback label="Lời nhắn" prop="message">
                                <a-textarea
                                    v-model="form.message"
                                    placeholder="Lời nhắn tới Gensi"
                                    :auto-size="{ minRows: 5, maxRows: 6 }"
                                />
                            </a-form-model-item>
                        </a-form-model>
                        <button
                            class="theme-btn btn-style-one text-white"
                            @click="submit"
                        >
                            <span class="btn-title">Read more</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="auto-container relative pb-10 lg:py-20 flex flex-col lg:flex-row items-center">
                <div class="relative flex-shrink-0 mb-16 w-full lg:mb-0 lg:mr-10 lg:w-2/5">
                    <a class="inline-block text-slate-600 w-28" href="/ciseco/">
                        <img class="block max-h-8 sm:max-h-10" src="/images/logo-2.png" alt="Logo">
                    </a>
                    <h2 class="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
                        Tiếp thị liên kết <br> cùng Soria
                    </h2>
                    <div class="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                        <a href="#" class="theme-btn btn-style-one text-white">
                            <span class="btn-title">Read more</span>
                        </a>
                    </div>
                </div>
                <div class="relative flex-1 max-w-xl lg:max-w-none">
                    <div class="block">
                        <img src="https://chisnghiax.com/ciseco/static/media/rightLargeImg.dd2356513f3941fd1981.png" class="object-cover w-full h-full" alt="nc-imgs">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _cloneDeep from 'lodash/cloneDeep';
    import { validEmail } from '@/utils/form';

    const defaultForm = {
        fullName: '',
        email: '',
        message: '',
    };
    export default {
        data() {
            return {
                form: this.user ? _cloneDeep(this.user) : _cloneDeep(defaultForm),
                rules: {
                    email: [{ validator: validEmail, message: 'Vui lòng nhập email của bạn', trigger: 'change' }],
                    message: [{ required: true, message: 'Vui lòng nhập lời nhắn', trigger: 'change' }],
                    fullName: [{ required: true, message: 'Vui lòng nhập tên của bạn', trigger: 'change' }],
                },
            };
        },

        methods: {
            submit() {
                this.$refs.contactForm.validate((valid) => {
                    if (valid) {
                        this.$message.success('Cảm ơn bạn đã phản hồi cho chúng tôi');
                        console.log(this.form);
                        this.form = _cloneDeep(defaultForm);
                    } else {
                        this.$message.error('Phản hồi thất bại');
                        return false;
                    }
                });
            },
        },
    };
</script>
