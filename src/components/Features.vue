<script setup>
import { features } from '../data/data';
</script>

<template>
    <section class="feature-area section-padding bg-grey" id="feature">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <h2>product <span>features</span></h2>
                    </div>
                </div>
                <div class="col-md-4" v-for="item in features">
                    <div class="single-feature">
                        <i :class="item.icon"></i>
                        <h3>{{ item.title }}</h3>
                        {{ item.description }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.single-feature {
    background-color: #fff;
    margin: 15px 0px;
    padding: 30px;
    font-size: 16px;
    text-align: center;
    transition: 0.3s;
    border: 1px solid #eee
}

.single-feature i {
    font-size: 50px;
    transition: 0.3s;
}

.single-feature h3 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    margin: 20px 0px 10px;
    transition: 0.3s;
}

.single-feature:hover h3,
.single-feature:hover i {
    color: #7F11F2;
}

.single-feature:hover {
    box-shadow: 0px 20px 50px #ccc;
}
</style>