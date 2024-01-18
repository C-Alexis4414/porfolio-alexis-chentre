<script setup>

const query = gql`
query ($id: ID!) {
  viewer {
    login
  }
  node(id: $id) {
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
const { data } = await useAsyncQuery(query, { id });
console.log(data);
</script>

<template>
    <div>
      <h1 class="text-3xl my-8">Projets</h1>
      <p class="text-lg mb-8">Voici mes projets d'école sur Github</p>
      <section class="grid grid-cols-1 gap-10">
        <div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
          <a :href="data?.node?.url" target="_blank">
            <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ data?.node?.name }}</h2>
          </a>
          <p>{{ data?.node?.description }}</p>
          <div class="mt-4">
            <p>
              <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{ data?.node?.stargazers?.totalCount }}
            </p>
            <p>
              <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{ data?.node?.forks?.totalCount }}
            </p>
            <p>
              <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{ data?.node?.watchers?.totalCount }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>