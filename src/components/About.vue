<script setup>
import aboutImg from '../assets/images/about.png';
import { about, aboutDescription } from '../data/data';
</script>

<template>
    <section class="section-padding" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img :src="aboutImg" alt="" class="img-responsive">
                </div>
                <div class="col-md-6">
                    <div class="section-heading">
                        <h2>who <span>we</span> are</h2>
                        <p>{{ aboutDescription }}</p>
                    </div>
                    <div class="single-content clearfix" v-for="item of about">
                        <span class="icon float-start">
                            <i :class="item.icon"></i>
                        </span>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-heading {
    margin-bottom: 50px;
}

.single-content {
    margin-bottom: 30px;
}

.single-content .icon {
    font-size: 40px;
    border: 1px solid #7F11F2;
    color: #7F11F2;
    display: inline-block;
    line-height: 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    transition: 0.3s;
    margin-right: 30px;
}

.single-content:hover .icon {
    background-color: #7F11F2;
    color: #fff;
}
</style>