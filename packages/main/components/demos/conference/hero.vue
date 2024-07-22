<script setup lang="ts">
import { CalendarIcon, TicketIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="conference-hero position-relative mt-95">
        <v-container>
            <v-row class="align-center">
                <v-col cols="12" lg="5">
                    <div class="content text-sm-left text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <p class="start-on text-primary font-weight-bold text-h5 mb-4 ">STARTS ON 16 AUGUST 2024</p>
                        <h1 class="text-h1 font-weight-bold mb-5 text-dark">User Experience Conference</h1>
                        <p class="text-h5 font-weight-regular text-muted">We offer you a new generation of task and project management system.
                            Plan, manage and track.</p>
                        <div class="d-sm-flex justify-sm-start justify-center mt-10 text-sm-left text-center">
                            <v-btn color="primary" size="x-large" class="mr-sm-4 px-6 mb-sm-0 mb-3 m-btn100"  variant="flat">
                                <TicketIcon size="22" class="mr-3" />buy access pass
                            </v-btn>
                            <v-btn color="primary" size="x-large" class="px-6 m-btn100" variant="outlined">
                                <CalendarIcon size="22" class="mr-3" />add to calender
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="7">
                    <div class="d-sm-flex align-center pl-md-15 justify-lg-start justify-center">
                        <div class="left-part position-relative bg-info lh-10">
                            <img src="/images/conference/experience-conference/karter.png" alt="karter" />
                            <div class="rounded-shaped text-center tag-left position-absolute py-4 px-5">
                                <p class="text-h5 font-weight-bold mb-0  text-muted mb-2">John Karter</p>
                                <p class="text-muted mb-2">4.8 rating</p>
                            </div>
                        </div>
                        <div class="right-part position-relative bg-primary lh-10 mt-sm-15 mt-8 ml-sm-4">
                            <img src="/images/conference/experience-conference/maria.png" alt="maria" />
                            <div class="rounded-shaped text-center tag-right position-absolute py-4 px-5">
                                <p class="text-h5 font-weight-bold mb-0  text-muted mb-2">Mariya John</p>
                                <p class="text-muted mb-2">4.9 rating</p>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>