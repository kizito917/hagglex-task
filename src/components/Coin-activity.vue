<template>
    <div>
        <v-tabs
            v-model="tab"
            background-color="transparent"
        >
        <v-tabs-slider color="#FFC31A"></v-tabs-slider>
            <v-tab key="vault">Send</v-tab>
            <v-tab disabled>Deposit</v-tab>
            <v-tab disabled>Transfer</v-tab>
            <v-tab disabled>Transaction History</v-tab>
        </v-tabs>
        <v-card>
            <div class="pa-4">
                <v-tabs-items v-model="tab">
                    <v-tab-item
                            key="vault"
                        >
                            <div class="pa-4">
                                <v-card>
                                    <v-tabs
                                        fixed-tabs
                                        v-model="tab1"
                                    >
                                    <v-tabs-slider color="transparent"></v-tabs-slider>
                                        <v-tab key="ext">
                                            EXTERNAL WALLET
                                        </v-tab>
                                        <v-tab key="hag">
                                            HAGGLEX WALLET
                                        </v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="tab1">
                                        <v-tab-item key="ext">
                                            <div class="pa-5">
                                                <h6>Amount to send</h6>
                                                <h1>0.00 <sub class="text-caption">NGN</sub></h1>
                                                <v-row>
                                                    <v-col cols="10">
                                                        <v-divider></v-divider>
                                                        <p class="text-caption">0.00000000BTC</p>
                                                    </v-col>
                                                    <v-col cols="2" style="background: transparent;">
                                                        <v-img 
                                                            src="../assets/img/l1.png"
                                                            width="40"
                                                            style="margin-top: -20px;"
                                                        >
                                                        </v-img>
                                                    </v-col>
                                                </v-row>
                                                <h4>Send to</h4>
                                                <v-text-field
                                                    label="Paste wallet address"
                                                    required
                                                    outlined
                                                ></v-text-field>
                                                <small class="float-right text-caption mb-4" style="margin-top: -20px;">Transaction Fees: 0.000000000BTC</small>
                                                <ButtonGen :buttonText="'SEND BTC'" />
                                                <div class="info-txt">
                                                    <p class="text-center text-caption font-weight-bold mt-2 pa-2">
                                                        <v-icon color="#2E1963">mdi-alert-circle</v-icon> Send only BTC to this deposit address
                                                    </p>  
                                                </div>    
                                                <v-divider></v-divider>
                                                <ul class="text-caption mt-2">
                                                    <li>Paste a BTC address only through this means.</li>
                                                    <li>Sending coins or token other than BTC to this address may result in the loss of your tokens.</li>
                                                </ul>        
                                            </div>
                                        </v-tab-item>
                                        <v-tab-item key="hag">
                                            <div class="pa-5">
                                                <h6>Amount to send</h6>
                                                <h1>0.00 <sub class="text-caption">NGN</sub></h1>
                                                <v-row>
                                                    <v-col cols="10">
                                                        <v-divider></v-divider>
                                                        <p class="text-caption">0.00000000BTC</p>
                                                    </v-col>
                                                    <v-col cols="2" style="background: transparent;">
                                                        <v-img 
                                                            src="../assets/img/l1.png"
                                                            width="40"
                                                            style="margin-top: -20px;"
                                                        >
                                                        </v-img>
                                                    </v-col>
                                                </v-row>
                                                <h4>Send to</h4>
                                                <v-text-field
                                                    label="Username, Phone number or email address"
                                                    required
                                                    outlined
                                                ></v-text-field>
                                                <div class="float-right mb-3 info-txt" style="margin-top: -20px;">
                                                    <p class="text-center text-caption font-weight-bold mt-2 pa-1">
                                                        Free transfers available: 5
                                                    </p>  
                                                    <!-- <p class="text-center text-caption font-weight-bold mt-1 pa-1">
                                                        Free transfers available: 5
                                                    </p>   -->
                                                </div> 
                                                <ButtonGen :buttonText="'SEND BTC'" />
                                                <div class="info-txt1">
                                                    <p class="text-center text-caption font-weight-bold mt-2 pa-2">
                                                        <v-icon color="#2E1963">mdi-alert-circle</v-icon> Send only BTC to this deposit address
                                                    </p>  
                                                </div>    
                                                <v-divider></v-divider>
                                                <ul class="text-caption mt-2">
                                                    <li>Paste a BTC address only through this means.</li>
                                                    <li>Sending coins or token other than BTC to this address may result in the loss of your tokens.</li>
                                                </ul>        
                                            </div>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-card>
                            </div>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </v-card>
    </div>
</template>

<script>
import ButtonGen from './Button-general.vue'
export default {
    props: ['buttonText'],
    components: { ButtonGen },
    data() {
        return {
            tab: null,
            tab1: null
        }
    }
}
</script>

<style scoped>
.info-txt {
    background: #B395FF28;
    border-radius: 50px;
    color: #2E1963;
}

.info-txt1 {
    background: #B395FF28;
    border-radius: 50px;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    color: #2E1963;
}

::v-deep .v-tab {
  color: black;
}

::v-deep .v-tab.v-tab {
  color: black;
  font-weight: bold;
}
</style>