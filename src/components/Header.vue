<script setup></script>
<template>
    <header class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-9">
                    <h1 class="logo"><a href="">data<span>binding</span></a></h1>
                </div>
                <div class="col-md-9 col-sm-3">
                    <nav class="navbar navbar-expand-lg">
                        <div class="menu">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#one">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <ul class="collapse navbar-collapse" id="one">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#feature">feature</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#testimonials">testimonials</a></li>
                                <li><a href="#pricing">pricing</a></li>
                                <li><a href="#blog">blog</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header-area {
    padding: 20px 0px;
    background-color: #fff;
    position: fixed;
    box-shadow: 0 0 10px -5px #000;
    width: 100%;
    top: 0;
    z-index: 9;
}

h1.logo {
    margin: 0;
    display: flex;
}

.logo a {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #7F11F2;
    font-weight: 700;
    display: inline-block;
}

.logo a span {
    color: #454545;
}

.navbar ul {
    float: right;
}

.navbar ul li {
    display: inline-block;
}

.navbar ul li a {
    display: block;
    text-transform: uppercase;
    color: #454545;
    position: relative;
    font-size: 16px;
    padding: 10px 20px;
    font-weight: 500;
    letter-spacing: 2px;
}

.navbar ul li:last-child a {
    padding-right: 0;
}

.navbar ul li:last-child a:hover:after {
    right: 0;
    width: calc(100% - 20px);
}

.navbar ul li:first-child a:before {
    width: 0px;
}

.navbar ul li a:hover {
    color: #7F11F2;
}

.navbar ul li a:before {
    position: absolute;
    content: "";
    width: 1px;
    height: 35%;
    top: 30%;
    background-color: #454545;
    left: 0;
}

.navbar ul li a:after {
    width: 0%;
    content: "";
    height: 1px;
    background-color: #7F11F2;
    bottom: 10px;
    position: absolute;
    right: 50%;
    transition: 0.3s;
}

.navbar ul li a:hover:after {
    width: calc(100% - 40px);
    right: 20px;
}

.navbar {
    display: inherit;
    padding: 0px !important;
}

button.navbar-toggler {
    float: right;
}
</style>