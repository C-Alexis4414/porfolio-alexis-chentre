<script setup>

const query = gql`
query  {
  viewer {
    login
  }
  nodes(ids: ["R_kgDOK5Okug", "R_kgDOKuQjpQ"]) {
    ... on Repository {
      id
      name
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

const id = "R_kgDOK972GA";
const project = ref([]);
const { data } = await useAsyncQuery(query, { id });
project.value.push(data?.node);
</script>

<template>
    <div>
      <h1 class="text-3xl my-8">Projets</h1>
      <p class="text-lg mb-8">Voici mes projets d'école sur Github</p>
      <section class="grid grid-cols-1 gap-10">
        <div v-for="project in data?.nodes" :key="project.id" class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
          <a :href="data?.nodes?.url" target="_blank">
            <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
          </a>
          <p>{{ project.description }}</p>
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