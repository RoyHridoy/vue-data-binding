<script setup>
import { testimonials } from '../data/data';
</script>

<template>
    <div class="section-padding" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <h2>what client <span>says</span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="item of testimonials">
                    <div class="single-testimonial">
                        <span class="quote">
                            <i class="bi-quote"></i>
                        </span>
                        <div class="spech">{{ item.feedback }}</div>
                        <div class="client-info">
                            <h4>{{ item.name }}</h4>
                            {{ item.designation }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.testimonial-area .single-testimonial {
    margin-bottom: 40px;
}

.single-testimonial {
    background-color: #f2f2f2;
    color: #333;
    position: relative;
    padding: 50px 20px 20px;
    text-align: center;
    margin-top: 50px;
    font-size: 13px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.single-testimonial:hover {
    box-shadow: 0 1px 5px #ccc;
}

.single-testimonial .quote {
    background-color: #f2f2f2;
    border: 5px solid #fff;
    border-radius: 50%;
    color: #bababa;
    display: inline-block;
    font-size: 42px;
    height: 90px;
    left: 0;
    line-height: 80px;
    margin: auto;
    position: absolute;
    right: 0;
    top: -50px;
    width: 90px;
}

.single-testimonial .spech {
    color: #555;
    font-size: 16px;
    font-style: italic;
    line-height: 28px;
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 15px;
}

.single-testimonial .spech:after {
    background-color: #bababa;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 33%;
}

.client-info h4 {
    margin-bottom: 0;
    text-transform: capitalize;
}
</style>