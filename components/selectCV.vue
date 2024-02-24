<template>
    <div class="mx-4 flex flex-col items-center">
        <div class="text-center rounded w-52 mx-1 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 to-emerald-800 hover:from-emerald-800 hover:to-emerald-400 active:scale-125 duration-300" @click="toggleDropdown">Télécharger mon CV</div>
        <Transition>
            <div class="grid grid-cols-1 grid-rows-2 bg-green-300/50 rounded-b-lg w-48 mx-3 shadow-[0_2px_3px_1px_rgba(0,0,0,0.1)] shadow-green-300 backdrop-blur-sm" v-if="isDropdownOpen">
                <div class="bg-green-600 m-1 rounded">
                        <a href="https://1drv.ms/b/s!AjV8299KVvmVtDNYM9CyZKeDrMBV?e=ZIOa8a" target="_blank">
                                <img class="float-left pr-4 pt-1 pl-1" src="~/assets/images/france.png"/>
                            Français
                        </a>
                </div>
                <div class="bg-green-600 m-1 rounded cursor-not-allowed" disabled>
                    <p>
                            <img class="float-left pr-4 pt-1 pl-1" src="~/assets/images/united-kingdom.png"/>
                        Anglais
                        <span class="mx-4">Bientôt</span>
                    </p>
                </div>
            </div>
        </Transition>
        <img class="mt-2 rounded-md" src="~/assets/images/cv_fr.jpg" />    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isDropdownOpen: false,
            };
        },
        methods: {
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            isActive() {
                return this.isActive = !this.isActive;
            },
        },
    };
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }
    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>