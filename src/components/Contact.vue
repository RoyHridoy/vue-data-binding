<script setup>
import { contact } from '../data/data';
const { address, phone: { primary: primaryPhone, secondary: secondaryPhone }, email: { primary, secondary } } = contact
</script>

<template>
    <section class="section-padding" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-5">
                    <div class="section-heading">
                        <h2>find <span>us</span></h2>
                    </div>
                    <ul class="find-info">
                        <li>
                            <i class="bi-geo-alt-fill"></i>
                            {{ address.split('/')[0] }} <br>
                            {{ address.split('/')[1] }}
                        </li>
                        <li>
                            <i class="bi-telephone"></i>
                            <a :href="'tel:' + primaryPhone">+88-{{ primaryPhone }}</a>
                            <a :href="'tel:' + secondaryPhone">+88-{{ secondaryPhone }}</a>
                        </li>
                        <li>
                            <i class="bi-envelope"></i>
                            <a :href="'mailto:' + primary">{{ primary }}</a>
                            <a :href="'mailto:' + secondary"> {{ secondary }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-8 col-sm-7">
                    <div class="contact-form">
                        <form id="contact-form" action="#" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" name="name" placeholder="name" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="tel" name="phone" placeholder="Phone number" required>
                                </div>
                            </div>
                            <input type="email" name="email" placeholder="your email" required>
                            <input type="text" name="subject" placeholder="subject" required>
                            <textarea name="message" id="message" placeholder="message" required></textarea>
                            <button type="submit">send message</button>
                            <p class="form-messege"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-form input,
.contact-form textarea {
    margin-bottom: 20px;
}

.find-info li {
    letter-spacing: 1px;
    margin-bottom: 25px;
    padding-bottom: 20px;
    padding-left: 45px;
    position: relative;
}

.find-info li:after {
    background-color: #ccc;
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 85%;
}

.find-info li:last-child {
    margin: 0;
}

.find-info li i {
    font-size: 30px;
    left: 0;
    position: absolute;
    top: -2px;
}

.find-info li a {
    color: #222;
    display: block;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
    letter-spacing: 1px;
}

.find-info li a:hover,
.widget-content a:hover {
    padding-left: 3px;
    color: #7F11F2;
}
</style>