<template>
    <div>
        <div @click="toggleDropdown" class="dropdown-button">Télécharger mon CV</div>
        <div v-if="isDropdownOpen" class="dropdown-menu">
            <a href="https://1drv.ms/b/s!AjV8299KVvmVtDNYM9CyZKeDrMBV?e=ZIOa8a" target="_blank" download>Français</a>
        </div>
        <img src="~/assets/images/cv_fr.jpg" width="1241" height="1755" />    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isDropdownOpen: false,
                files: ['fr', 'en']
            };
        },
        methods: {
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
        },
    };
</script>