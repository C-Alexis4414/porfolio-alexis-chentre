<script setup>
import { HandRaisedIcon } from '@heroicons/vue/24/solid';
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
    <section>
        <div class="flex flex-row">
            <HandRaisedIcon class="h-6 w-6 text-blue-500"/>
            <h1 class="text-3xl text-emerald-500 font-bold m-2">Bonjour, je m'appelle Alexis Chentre !</h1>
        </div>
        <p class="text-2xl text-teal-500 m-4 italic font-semibold dark:text-lime-500">Développeur Aveva en alternance</p>
    </section>
    <section class="flex flex-col items-center">
      <div class="box-border h-52 w-72">
      <CardProfilPicture />
    </div>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="md:3/4">
        <h2 class="text-xl font-bold mt-8">À propos de moi</h2>
        <p class="text-justify text-base py-2">
          Normand débarqué en Loire-Atlantique depuis 8 ans, je suis issue du secteur des télécommunications en bureau d'études pour le déploiement de la fibre optique.
          J'ai récemment entrepris un parcours de reconversion par souhait d'exercer un metier plus en adéquation avec mes valeurs, à savoir ma passion pour la tech, choix confirmé lors de ma dernière expérience professionnelle.
          J'ai eu la chance d'avoir des collègues et des amis développeurs qui m'ont encouragé dans ma démarche. Cela, additionné à mon goût pour la découverte du fonctionnement, la composition de réseaux et d'UC, ainsi que la conception d'applications, j'ai décidé de franchir le pas.
          C'est ainsi que j'ai intégré la formation de concepteur développeur d'applications à Ada Tech School depuis l'année dernière, en mai 2023, pour une durée de 21 mois.
          Ce que je cherche dans cette nouvelle carrière, c'est de pouvoir mettre à contribution mon appétence à apprendre continuellement de nouvelles choses et à résoudre des problèmes sur des solutions ingénieuses.
        </p>
      </div>
      <selectCV />
    </section>

    <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>