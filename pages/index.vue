<script setup>
import { HandRaisedIcon } from '@heroicons/vue/24/solid';
</script>

<script>
import marked from 'marked';
export default {
    computed: {
        markdown() {
            return marked(this.$content('pages/index').text)
        }
    }
}
</script>

<template>
    <section>
        <div class="flex flex-row">
            <HandRaisedIcon class="h-6 w-6 text-blue-500"/>
            <h1 class="text-emerald-400 font-semibold m-2">Bonjour, je m'appelle Alexis Chentre !</h1>
        </div>
        <p class="text-base text-lime-200 m-4 italic">Développeur web</p>
    </section>
    <section class="flex flex-col md:flex-row">
        <div class="md:3/4">
        <h2 class="text-3xl font bold mt-8">About</h2>
        <p class="text-justify text-lg py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec consequat sem. Nam tempor a lacus in tincidunt. Ut eget diam lorem. In faucibus lacinia est, eget condimentum nulla suscipit vel. Curabitur fermentum lorem urna, vitae eleifend ante interdum porttitor. Mauris ut sagittis massa, sed sodales dolor. Quisque porta, quam non sodales mattis, orci odio imperdiet nibh, id feugiat augue enim non dolor. Etiam vitae enim eu libero pharetra elementum quis quis quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et orci vel tellus facilisis tristique. Aenean mollis sapien eu vulputate commodo. Aenean lacinia vitae purus vel faucibus. Ut ultrices faucibus mauris. Phasellus blandit nunc ante, ut interdum libero lobortis sed. Phasellus nec varius metus, eu ultricies lorem.
        </p>
    </div>
    <img src="~/assets/images/loremPicsum1.jpg" alt="loremPicsum1" class="w-1/2 md:max-w-sm p-8 mx-auto" />
    </section>
</template>