<template>
    <div>
        <v-card class="pa-5">
            <h4>Wallet</h4>
            <div class="float-right">
                <v-tabs>
                    <v-tabs-slider color="transparent"></v-tabs-slider>
                    <v-tab class="elevation">List</v-tab>
                    <v-tab class="elevation">Stats</v-tab>
                </v-tabs>
            </div>
            <div class="pt-5">   
                <v-tabs
                    v-model="tab"
                >
                    <v-tabs-slider color="#FFC31A"></v-tabs-slider>
                    <v-tab
                        key="flex"
                    >
                        FLEX
                    </v-tab>
                    <v-tab
                        key="vault"
                        disabled
                    >
                        VAULT
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item
                        key="flex"
                        class="mt-3"
                    >
                        <v-list
                            subheader
                            two-line
                            >

                            <v-list-item
                                v-for="data in coins"
                                :key="data.title"
                            >
                                <v-list-item-avatar>
                                <v-img
                                :src="data.img"
                                >
                                </v-img>
                                <!-- <v-icon
                                    class="grey lighten-1"
                                    dark
                                >
                                    mdi-folder
                                </v-icon> -->
                                </v-list-item-avatar>

                                <v-list-item-content>
                                <v-list-item-title v-text="data.title"></v-list-item-title>

                                <v-list-item-subtitle v-text="data.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                <v-list-item-title v-text="data.amount" class="amount"></v-list-item-title>

                                <v-list-item-subtitle v-text="data.subAmount" class="text-caption"></v-list-item-subtitle>
                                </v-list-item-action>
                            </v-list-item>
                            </v-list>
                        </v-tab-item>
                    <v-tab-item
                        key="vault"
                    >
                        <h4>Vault</h4>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
            coins: [
                {
                    img: require('../assets/img/s1.png'),
                    subtitle: 'HAG',
                    title: 'Haggle',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 HAG'
                },
                {
                    img: require('../assets/img/s2.png'),
                    subtitle: 'BTC',
                    title: 'Bitcoin',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 BTC'
                },
                {
                    img: require('../assets/img/s3.png'),
                    subtitle: 'USDT',
                    title: 'USDT',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 USDT'
                },
                {
                    img: require('../assets/img/s4.png'),
                    subtitle: 'BCH',
                    title: 'Bitcoin Cash',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 BCH'
                },
                {
                    img: require('../assets/img/s5.png'),
                    subtitle: 'ETH',
                    title: 'Ethereum',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 ETH'
                },
                {
                    img: require('../assets/img/s6.png'),
                    subtitle: 'DASH',
                    title: 'Dash',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 DASH'
                },
                {
                    img: require('../assets/img/s7.png'),
                    subtitle: 'LTC',
                    title: 'Litecoin',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 LTC'
                },
                {
                    img: require('../assets/img/s8.png'),
                    subtitle: 'DOGE',
                    title: 'Dogecoin',
                    subAmount: 'NGN 0.00',
                    amount: '0.00 DOGE'
                },
            ],
        }
    }
}
</script>

<style scoped>
.amount {
    color: #2E1963;
}

::v-deep .v-tab {
  margin-left: -23px;
  color: black;
}

::v-deep .v-tab.v-tab {
  color: black;
  font-weight: bold;
}
</style>