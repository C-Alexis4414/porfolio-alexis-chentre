<template>
        <div id="card">
            <div id="card-front" class="absolute backface-hidden">
                <img src="~/assets/images/Profile Picture Pro.jpg" alt="Photo de profil réelle">
            </div>
            <div id="card-back" class="absolute backface-hidden">
                <img src="~/assets/images/alexisAvatar.png" alt="Sticker Bitmoji">
            </div>
        </div>
</template>

<style scoped>
    #card:hover #card-front {
        transform: rotateY(-180deg);
    }
    #card:hover #card-back {
        transform: rotateY(0deg);
    }
</style>