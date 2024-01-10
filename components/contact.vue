<template>
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" class="border-black border-2 rounded-md shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.1)] p-2 mb-2">
        <label>Email</label>
        <input type="email" name="user_email" class="border-black border-2 rounded-md shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.1)] p-2 mb-2">
        <label>Message</label>
        <textarea name="message" class="border-black border-2 rounded-md shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.1)] p-2 mb-2"></textarea>
        <input type="submit" value="Send" class="bg-blue-500 text-white p-2">
    </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
methods: {
    sendEmail() {
    const config = useRuntimeConfig();
    emailjs.sendForm(config.public.serviceId, config.public.templateId, this.$refs.form, config.public.userId)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            console.log("message sent")
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
}
}
</script>