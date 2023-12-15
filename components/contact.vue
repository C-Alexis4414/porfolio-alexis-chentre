<template>
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
    </form>
</template>

<script>
import emailjs from '@emailjs/browser';
import 'dotenv/config';

const serviceId = process.env.SERVICE_ID;
const templateId = process.env.TEMPLATE_ID;
const userId = process.env.USER_ID;

export default {
methods: {
    sendEmail() {
    emailjs.sendForm(serviceId, templateId, this.$refs.form, userId)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            console.log("message sent")
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
}
}
</script>