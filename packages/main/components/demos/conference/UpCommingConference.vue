<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { UpcommingConferenceData } from '@/_mockApis/demos/conference';
import { UpCommingcuroselSettings, UpCommingcuroselSettingsBreakpoints } from '@/_mockApis/demos/Slider';
import { ChevronLeftIcon } from "vue-tabler-icons";
</script>
<template>
    <div class="upcomming-conference py-md-12 py-5 ">
        <div class="py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        Upcoming Conference</h2>
                </div>
                <v-row class="justify-center mt-md-11 mt-6">
                    <v-col cols="12" sm="11">
                        <carousel :settings="UpCommingcuroselSettings" :breakpoints="UpCommingcuroselSettingsBreakpoints"
                            class="">
                            <slide v-for="card in UpcommingConferenceData" :key="card.date">
                                <div class="bg-lightprimarygray py-6 px-4 rounded-md w-100 mx-2 date-block">
                                    <h3 class="text-h3 text-muted font-weight-regular mb-2">{{ card.date }}</h3>
                                    <p class="text-subtitle-2 text-muted font-weight-medium">{{ card.monthyear }}</p>
                                </div>
                            </slide>
                            <template #addons>
                                <navigation>
                                    <template #next>
                                        <span>
                                            <ChevronRightIcon class="text-primary" size="55" stroke-width="0.8" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span>
                                            <ChevronLeftIcon class="text-primary" size="55" stroke-width="0.8" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </v-col>
                </v-row>
                <!-----Details----->
                <v-row class="mt-sm-12 mt-6">
                    <v-card elevation="0" class="border mx-md-0 mx-4" >
                        <div class="pa-md-11 pa-sm-8 pa-5">
                            <v-row class="justify-space-between align-center">
                                <v-col cols="12" md="4">
                                    <h3 class="text-h4 text-dark font-weight-bold">The Conference Construct Millennial</h3>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <div class="d-flex align-center">
                                        <div class="d-flex">
                                            <v-avatar size="72" class="mr-n2">
                                                <img src="/images/conference/upcoming-conference/reenaj.jpg" alt="profile"
                                                    height="72" width="72">
                                            </v-avatar>
                                            <v-avatar size="72" class="mr-n2">
                                                <img src="/images/conference/upcoming-conference/johnny.jpg" alt="profile"
                                                    height="72" width="72">
                                            </v-avatar>
                                        </div>
                                        <div class="ms-7">
                                            <p class="text-body-1 text-muted">Speech by</p>
                                            <p class="text-h5 text-dark font-weight-bold">Reena John and Laurence</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3" sm="6">
                                    <v-btn color="primary" size="x-large" block  variant="outlined">
                                        book ticket
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-divider class="my-6"></v-divider>
                            <v-row class="justify-space-between align-center">
                                <v-col cols="12" md="4">
                                    <h3 class="text-h4 text-dark font-weight-bold">Local Business Global Event</h3>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <div class="d-flex justify-md-center align-center">
                                        <div class="d-flex">
                                            <v-avatar size="72" >
                                                <img src="/images/conference/upcoming-conference/luthar.jpg" alt="profile"
                                                    height="72" width="72">
                                            </v-avatar>
                                        </div>
                                        <div class="ms-7">
                                            <p class="text-body-1 text-muted">Speech by</p>
                                            <p class="text-h5 text-dark font-weight-bold">Martin Luthar</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3" sm="6">
                                    <v-btn color="primary" size="x-large" block  variant="outlined">
                                        book ticket
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-row>

            </v-container>
        </div>
    </div>
</template>