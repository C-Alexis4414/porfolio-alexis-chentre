<script setup>
import showdown from 'showdown';
const query = gql`
query  {
  viewer {
    login
  }
  nodes(ids: ["R_kgDOK5Okug", "R_kgDOKuQjpQ", "R_kgDOKlVaug", "R_kgDOKT9uAQ", "R_kgDOKT9rLQ"]) {
    ... on Repository {
      id
      name
      namereadme: object(expression: "HEAD:README.md") {
      ... on Blob {
        text
      }
      }
      createdAt
      description
      url
      forks {
        totalCount
      }
      watchers {
        totalCount
      }
      stargazers {
        totalCount
      }
    }
  }
}
`;

const project = ref([]);
const { data } = await useAsyncQuery(query);
project.value.push(data?.node);
const markdownToHtml = (markdown) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdown);
};
</script>

<template>
    <div>
      <h1 class="text-3xl my-8">Projets</h1>
      <p class="text-lg mb-8">Voici mes projets d'école sur Github</p>
      <section class="grid grid-cols-1 gap-10">
        <div v-for="project in data?.nodes" :key="project.id" class="p-8 border-4 my-4 rounded-lg hover:bg-gray-500">
          <a :href="data?.nodes?.url" target="_blank">
            <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
          </a>
          <p>{{ project.description }}</p>
          <div v-if="project.name === 'microblogging-musicat'">
          <img src="~/assets/images/cat-on-armchair-with-music.png" alt="Image microblogging-musicat">
          </div>
          <div v-else-if="project.name === 'copameba'">
          <img src="~/assets/images/COPAMEBA.png" alt="Image COPAMEBA">
          </div>
          <div v-else-if="project.name === 'the-dev-laces'">
          <img src="~/assets/images/the-dev-laces.png" alt="Image the-dev-laces">
          </div>
          <div v-else-if="project.name === 'a-la-decouverte-du-systeme-solaire'">
          <img src="~/assets/images/iss.png" alt="Image a-la-decouverte-du-systeme-solaire">
          </div>
          <div v-else-if="project.name === 'pico-resto'">
          <img src="~/assets/images/burger-truck.jpg" alt="Image pico-resto">
          </div>
          <div v-else>Aucune image trouvée</div>
          <div class="overflow-y-auto h-64 border-2 rounded-md" v-html="markdownToHtml(project.namereadme?.text)"></div>
          <div class="mt-4">
            <p>
              <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{ project.stargazers?.totalCount }}
            </p>
            <p>
              <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{ project.forks?.totalCount }}
            </p>
            <p>
              <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{ project.watchers?.totalCount }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>