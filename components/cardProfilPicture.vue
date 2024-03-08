<template>
        <div class="card" @mouseover="flipCard" @mouseleave="unflipCard">
            <div class="card-front">
                <img class="rounded-2xl w-auto h-48 md:flex-row" src="~/assets/images/Profile Picture Pro.jpg" alt="Photo de profil réelle">
            </div>
            <div class="card-back">
                <img class="w-auto h-48 md:flex-row" src="~/assets/images/alexisAvatar.png" alt="Sticker Bitmoji">
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                flipped: false,
            };
        },
        methods: {
            flipCard() {
                this.flipped = true;
            },
            unflipCard() {
                this.flipped = false;
            },
        },
    
    }
</script>

<style scoped lang="scss">
    .card {
        perspective: 1000px;
    }

    .card-front,
    .card-back {
        float: none;
        position: absolute;
        backface-visibility: hidden;
        transition: transform 0.5s;
    }

    .card-back {
        transform: rotateY(180deg);
    }

    .card:hover .card-front {
        transform: rotateY(180deg);
    }

    .card:hover .card-back {
        transform: rotateY(0deg);
    }
</style>