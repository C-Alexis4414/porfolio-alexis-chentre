<template>
    <div>
        <div class="text-center bg-slate-600 rounded m-1 w-52" @click="toggleDropdown">Télécharger mon CV</div>
        <div class="grid grid-cols-1 grid-rows-2 bg-slate-200 rounded-b-lg w-48 mx-3" v-if="isDropdownOpen">
            <div class="bg-slate-500 m-1 rounded">
                    <a href="https://1drv.ms/b/s!AjV8299KVvmVtDNYM9CyZKeDrMBV?e=ZIOa8a" target="_blank">
                            <img class="float-left pr-4 pt-1 pl-1" src="~/assets/images/france.png"/>
                        Français
                    </a>
            </div>
            <div class="bg-slate-500 m-1 rounded">
                <p>
                        <img class="float-left pr-4 pt-1 pl-1" src="~/assets/images/united-kingdom.png"/>
                    Anglais
                    <span>Bientôt</span>
                </p>
            </div>
        </div>
        <img class="m-2 rounded-md" src="~/assets/images/cv_fr.jpg" width="1241" height="1755" />    
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
        },
    };
</script>