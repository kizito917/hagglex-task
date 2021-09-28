<template>
    <v-container-fluid>
        <Navbar />
        <v-main style="background: #F4F5F9;">
            <div class="parent-div">
                <div class="header">
                    <v-row class="pa-4">
                        <v-col cols="6">
                            <div class="sec-text">
                                <h5>My Assets Portfolio</h5>
                                <h2 class="pt-5"><b class="text-h4 font-weight-bold">N0.00</b><sup class="ml-2">NGN</sup></h2>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="float-right mr-5">
                                <v-card elevation="7" class="rounded-circle">
                                    <ToggleButton 
                                        :value="false"
                                        :labels="{checked: 'USD', unchecked: 'NGN'}"
                                        :color="{checked: 'white', unchecked: '#FFC175'}"
                                        :switch-color="{checked: '#FFC175', unchecked: 'white'}"
                                        width="120"
                                        height="50"
                                    />
                                </v-card>
                                <!-- <v-switch
                                    v-model="switch1"
                                    flat
                                    inset
                                    label="hey"
                                ></v-switch> -->
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="mt-4">
                    <v-row>
                        <v-col cols="12" md="6">
                            <CoinList />
                        </v-col>
                        <v-col cols="12" md="6">
                            <div>
                                <BalanceDisplay />
                            </div>
                            <div>
                                <CoinActivity />
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-main>
    </v-container-fluid>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
import BalanceDisplay from '../components/Balance-display.vue'
import Navbar from '../components/Navbar.vue'
import CoinList from '../components/Coin-list.vue'
import CoinActivity from '../components/Coin-activity.vue'
export default {
    components: {
        ToggleButton,
        Navbar,
        CoinList,
        CoinActivity,
        BalanceDisplay
    },
    data() {
        return {
            switch1: true
        }
    }
}
</script>