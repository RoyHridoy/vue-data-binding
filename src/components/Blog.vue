<script setup>
import { blog } from '../data/data';
</script>

<template>
    <section class="blog section-padding bg-grey" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <h2>News & <span>Announcements</span></h2>
                    </div>
                </div>
                <div class="col-md-4" v-for="post of   blog  ">
                    <div class="single-blog">
                        <div class="blog-bg" :style="{ backgroundImage: `url(${post.image})` }">
                            <div class="blog-date">
                                <span> {{ post.date.split(' ')[0] }} </span>
                                <span>{{ post.date.split(' ')[1] }}</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <h4><a :href="post.postLink">{{ post.title }}</a></h4>
                            <div class="info">
                                <ul>
                                    <li> <a href="#"> <i class="bi-person"></i> {{ post.author }} </a></li>
                                    <li> <a href="#"> <i class="bi-chat-left-dots"></i> {{ post.comments }}</a></li>
                                </ul>
                            </div>
                            <div class="descriptions">{{ post.postData }}</div>
                            <a :href="post.postLink" class="bordered-btn">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-bg {
    background-color: #ddd;
    background-position: center center;
    background-size: cover;
    display: block;
    height: 270px;
    position: relative;
    z-index: 1;
}

.blog-bg:after {
    background-color: #fff;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    visibility: hidden;
    width: 100%;
    z-index: -1;
}

.single-blog:hover .blog-bg:after {
    opacity: 0.4;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    visibility: visible;
}

.blog-content {
    border: 1px solid #eee;
    border-top: 0px;
    padding: 20px 20px 20px;
}

.blog-content h4 {
    margin-bottom: 5px;
}

.blog-date {
    background-color: #fff;
    bottom: 20px;
    color: #7F11F2;
    display: inline-block;
    font-weight: 400;
    padding: 10px 20px 8px;
    position: absolute;
    right: 20px;
    text-align: center;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.single-blog:hover .blog-date {
    background-color: #7F11F2;
    color: #fff;
}

.blog-date span {
    line-height: 24px;
}

.blog-date span:first-child {
    font-size: 30px;
}

.blog-date span:last-child {
    display: block;
    text-transform: uppercase;
}

.blog-content h4 a {
    color: #222;
    font-family: "Montserrat", sans-serif;
    position: relative;
}

.blog-content .info ul {
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
    padding-bottom: 5px;
}

.blog-content .info li {
    display: inline-block;
    margin-right: 20px;
    font-size: 95%;
}

.blog-content .info li:last-child {
    margin-right: 0;
}

.blog-content .info li a {
    color: #7F11F2;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
}

.blog-content .info li a i {
    margin-right: 5px;
}

.blog-content .bordered-btn {
    margin-top: 20px;
}

.blog-content h4 a:after {
    background-color: #222;
    content: "";
    height: 1px;
    left: -2%;
    margin-top: 1px;
    position: absolute;
    top: 50%;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 0;
}

.single-blog:hover .blog-content h4 a:after {
    width: 105%;
}
</style>