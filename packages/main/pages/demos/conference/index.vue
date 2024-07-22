<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/ConferenceFooter.vue';
import Hero from '@/components/demos/conference/hero.vue';
import Conference from '@/components/demos/conference/Conference.vue';
import WorldClassSpeakers from '@/components/demos/conference/WorldClassSpeakers.vue';
import DigitalEvents from '@/components/demos/conference/DigitalEvents.vue';
import Highlights from '@/components/demos/conference/Highlights.vue';
import UpCommingConference from '@/components/demos/conference/UpCommingConference.vue';
import AttendeesSay from '@/components/demos/conference/AttendeesSay.vue';
import Ticket from '@/components/demos/conference/Ticket.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <Hero />
        <Conference />
        <WorldClassSpeakers />
        <DigitalEvents />
        <Highlights />
        <UpCommingConference />
        <AttendeesSay />
        <Ticket />
    <Footer />
</template>
