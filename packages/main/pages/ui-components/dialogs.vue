<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import DialogsActivator from '@/components/ui-components/dialogs/DialogsActivator.vue';
import DialogsModel from '@/components/ui-components/dialogs/DialogsModel.vue';
import DialogsFullscreen from '@/components/ui-components/dialogs/DialogsFullscreen.vue';
import DialogsTransitions from '@/components/ui-components/dialogs/DialogsTransitions.vue';
import DialogsPersistent from '@/components/ui-components/dialogs/DialogsPersistent.vue';
import DialogsScrollable from '@/components/ui-components/dialogs/DialogsScrollable.vue';
import DialogsForm from '@/components/ui-components/dialogs/DialogsForm.vue';
import DialogsNested from '@/components/ui-components/dialogs/DialogsNested.vue';
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Dialogs' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Dialogs',
        disabled: true,
        color: 'primary',
        to: '/'
    }
]);

</script>

<template>
    <!--Header-->
    <Header />
    <div class="mt-95 border-top">
        <v-container class="pt-10">
            <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
            <h2 class="text-h2 mb-7">{{ page.title }}</h2>
            <v-row>
                <v-col cols="12">

                    <v-row>
                        <v-col cols="12" sm="12" lg="4">
                            <UiChildCard title="Simple">
                                <DialogsActivator />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4">
                            <UiChildCard title="V-model">
                                <DialogsModel />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Transition">
                                <DialogsTransitions />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Form">
                                <DialogsForm />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Full screen">
                                <DialogsFullscreen />
                            </UiChildCard>
                        </v-col>

                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Persistent">
                                <DialogsPersistent />
                            </UiChildCard>
                        </v-col>
                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Scrollable">
                                <DialogsScrollable />
                            </UiChildCard>
                        </v-col>

                        <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
                            <UiChildCard title="Nested Dialog">
                                <DialogsNested />
                            </UiChildCard>
                        </v-col>
                    </v-row>

                </v-col>
                <ReadyTostart />
            </v-row>
            
        </v-container>
    </div>
    <Footer />
</template>
