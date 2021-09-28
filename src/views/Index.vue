<template>
  <v-container-fluid>
    <v-row class="signup-row">
      <v-col cols="0" md="7" class="auth-design">
        <AuthDesign />
      </v-col>
      <v-col cols="12" md="5" class="col-2">
        <div class="col-2-div">
          <div class="pa-11">
            <h3 class="mb-5">Create new account</h3>
            <div class="form-div">
              <form>
                <div class="form-group">
                  <label for="" class="text-caption">Email Address</label>
                  <v-text-field
                    type="email"
                    v-model="form.email"
                    label="example@mail.com"
                    required
                  ></v-text-field>
                </div>
                <div class="form-group">
                  <label for="" class="text-caption">Password</label>
                  <v-text-field
                    type="password"
                    v-model="form.password"
                    label="******************"
                    required
                  ></v-text-field>
                </div>
                <div class="form-group">
                  <label for="" class="text-caption">Create Username</label>
                  <v-text-field
                    v-model="form.username"
                    label="Chrissteve"
                    required
                  ></v-text-field>
                </div>
                <div class="form-group">
                  <label for="" class="text-caption">Enter your phone number</label>
                  <v-text-field
                    v-model="form.phonenumber"
                    label="813 000 0000"
                    required
                  > 
                    <div slot="prepend" style="background: #F3EEFF;">
                      <v-img
                        alt="Country flag"
                        class="shrink mr-2 pt-4"
                        contain
                        src="../assets/img/flag.png"
                        transition="scale-transition"
                        width="30"
                      />
                      <small class="text-caption">(+234)</small>
                    </div>
                  </v-text-field>
                </div>
                <p class="purple--text font-weight-black mt-5 mb-5 text-caption">Got referral code?</p>
                <div class="form-group" @click.prevent="register">
                  <ButtonGen :buttonText="'SIGN UP'" />
                </div>
                <p class="text-center mt-3 font-weight-black text-caption">Have an account? <router-link to="/login" class="purple--text text-decoration-none">Sign in to explore</router-link></p>
                <div class="mt-10">
                  <v-row>
                    <v-col cols="6">
                      <p class="text-caption">Need help?</p>
                    </v-col>
                    <v-col cols="2" style="background: white;">
                      <p class="text-caption">Privacy</p>
                    </v-col>
                    <v-col cols="4">
                      <p class="text-caption">Terms & Policy</p>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
  import AuthDesign from '../components/AuthDesign.vue';
  import ButtonGen from '../components/Button-general.vue';
  import axios from "axios";
  export default {
    props: ['buttonText'],
    name: 'Index',
    components: { AuthDesign, ButtonGen},
    data() {
      return {
        form: {
          email: '',
          password: '',
          username: '',
          phonenumber: '',
        }
      }
    },
    methods: {
      async register() {
        this.$store.dispatch('showSpinner', true)
        if (this.form.email == '' || this.form.username == '' || this.form.password == '' || this.form.phonenumber == '') {
          this.$toasted.show("Please fill all fields",{ 
            theme: "toasted-primary", 
            position: "top-center", 
            type: "error",
            duration : 2000
          })
        } else {
          axios.post('http://api-staging.hagglex.com/graphql', {
              query: `
              mutation register($email: String!, $password: String!, $username: String!, $phonenumber: String!)
                  {
                    register(
                        data: {email: $email,
                        password: $password,
                        username: $username,
                        phonenumber: $phonenumber,
                        country: "Nigeria",
                        currency: "NGN"}
                    ) {
                    token
                    }
                  }
              `,
              variables: {
                email: this.form.email,
                password: this.form.password,
                username: this.form.username,
                phonenumber: this.form.phonenumber,
                country: "Nigeria",
                currency: "NGN"
              }
          }).then(() => {
            this.$store.dispatch('hideSpinner', false)
              this.$toasted.show("registration successful",{ 
                  theme: "toasted-primary", 
                  position: "top-center", 
                  type: "success",
                  duration : 2000
              })
                setTimeout(() => {
                  this.$router.push('/verify-email')
              }, 2000);
          }).catch(() => {
            this.$store.dispatch('hideSpinner', false)
            this.$toasted.show("Unable to register user",{ 
              theme: "toasted-primary", 
              position: "top-center", 
              type: "error",
              duration : 2000
            })
          })
        }
      }
    },
  }
</script>
