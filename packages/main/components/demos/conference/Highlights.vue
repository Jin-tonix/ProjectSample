<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { HighlightData } from '@/_mockApis/demos/conference';
import {HighlightSliderSettings } from '@/_mockApis/demos/Slider';
const dialog = ref(false);
</script>
<template>
    <!---Modal Video--->
    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <div class="d-flex align-center justify-space-between pa-4">
                <h3 class="text-caption font-weight-bold text-dark">Video</h3>
                <v-btn @click="dialog = false" variant="plain" density="compact" class="no-effect mr-n4 text-dark" :ripple="false">
                    <XIcon />
                </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="pa-4">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/fVFKt6GF7XU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true"></iframe>
            </div>
        </v-card>
    </v-dialog>

    <div class="highlights bg-lightprimarygray py-md-12 py-5 mt-14">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="align-center">
                    <v-col cols="12" md="5">
                        <div class="pr-md-10">
                            <h2 class="text-h2 text-dark mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Previous Year Highlights</h2>
                            <p class="text-muted text-body-1 ">Many variations of passages of Lorem Ipsum available but the
                                majority have suffered alteration in some form injected humour, or randomised words</p>
                            <div class="d-flex flex-wrap justify-space-between mt-md-15 mt-8">
                                <div>
                                    <h2 class="text-primary text-h2">10k+</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Tickets Confirmed</h6>
                                </div>
                                <div>
                                    <h2 class="text-primary text-h2">16</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Partners</h6>
                                </div>
                                <div>
                                    <h2 class="text-primary text-h2">150k+</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Participants</h6>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                        <div >
                            <carousel :settings="HighlightSliderSettings"  class="overflow-hidden">
                                <slide v-for="card in HighlightData" :key="card.banner">
                                    <div class="position-relative rounded-md overflow-hidden lh-10 ">
                                        <img :src="card.banner" alt="banner" class="w-100" />
                                        <v-avatar size="90 " class="play-btn center-btn">
                                            <v-btn height="90" width="90" @click="dialog = true" class="bg-white">
                                                <PlayerPlayFilledIcon class="text-primary" size="35" />
                                            </v-btn>
                                        </v-avatar>
                                    </div>
                                </slide>
                            </carousel>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>