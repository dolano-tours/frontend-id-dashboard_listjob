<template>
<nav id="sidebar">
    <div class="sidebar-header" id="title">
        <p class="text-left title">
            <strong>Management Job</strong>
        </p>
        <hr>
        <p class="text-left subtitle">
            <label>MENU</label>
        </p>
    </div>
    <ul class="nav flex-column text-left vr">
        <li class="nav-item">
            <router-link class="nav-link" tag="a" to="/incoming">
                <i class="fas fa-image"></i>
                INCOMING JOB
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" tag="a" to="/outgoing">
                <i class="fas fa-image"></i>
                OUTGOING JOB
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" href="#">
                <i class="fas fa-question"></i>
                FAQ
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" href="#">
                <i class="fas fa-paper-plane"></i>
                CONTACT
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: "Sidebar",
    methods: {
    redirectTo(target) {
        if (target != this.$router.history.current.fullPath) {
            this.$router.push(target)
            }
        }
    }
}
</script>

<style lang="css" scoped>
#title {
    margin-top: 1em;
    margin-bottom: -1.5em;
}
#sidebar {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 256px;
    height: 100vh;
    min-height: 100%;
    background-color: #121212;
    opacity: 0.8;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
}
hr {
    margin-inline-start: 1em;
    margin-inline-end: 1em;
    border-top: 1px solid #53b1ce;
}
li {
    margin-top: 0.5rem;
    margin-right: 1em;
    margin-left: 1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    font-size: 13px;
    border-left: 2px solid #53b1ce;
    margin-left: 0.5rem;
    opacity: 0.6;
    transition: 0.6s;
}
li:hover{
    color: #a0b7db;
    background-color: darkslategrey;
    opacity: 1;
    border-left: 0px;
    border-radius: 25px;
}
a {
    color: white;
    transition: 0.5s;
}
a:hover {
    color: white;
    transform: translateX(10px);
}
p {
    margin-left: 1.5em;
    color: white;
}
.title {
    font-weight: 400;
}
.subtitle {
    font-size: 13px;
    margin-bottom: 1em;
    font-weight: 500;
}
.fas {
    color: #53b1ce;
}
body { 
    animation: fadeInAnimation ease 3s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
} 
@keyframes fadeInAnimation { 
0% { 
    opacity: 0; 
} 
100% { 
    opacity: 1; 
} 
}
</style>