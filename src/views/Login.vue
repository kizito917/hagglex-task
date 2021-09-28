<template>
  <v-container-fluid>
    <v-row class="signup-row">
      <v-col cols="0" md="7" class="auth-design">
        <AuthDesign />
      </v-col>
      <v-col cols="12" md="5" class="col-2">
        <div class="col-2-div-login">
          <div class="pa-11">
            <h3 class="mb-5">Welcome Back</h3>
            <div class="form-div">
              <div class="form-group">
                <label for="" class="text-caption">Email Address</label>
                <v-text-field
                  type="email"
                  v-model="form.input"
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
              <p class="purple--text font-weight-black mt-5 mb-5 text-caption">Forgot password?</p>
              <div class="form-group" @click.prevent="login">
                <ButtonGen :buttonText="'Sign In'" />
              </div>
              <p class="text-center mt-6 font-weight-black text-caption">New user? <router-link to="/" class="purple--text text-decoration-none">Sign up to get started</router-link></p>
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
    components: { AuthDesign, ButtonGen },
    data() {
        return {
            form: {
                input: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            this.$store.dispatch('showSpinner', true)
            if (this.form.input == '' || this.form.password == '' || this.form.password == '' || this.form.phonenumber == '') {
                this.$toasted.show("Please fill all fields",{ 
                    theme: "toasted-primary", 
                    position: "top-center", 
                    type: "error",
                    duration : 2000
                })
            } else {
                axios.post('http://api-staging.hagglex.com/graphql', {
                  query: `
                  mutation login($input: String!, $password: String!)
                        {
                            login(
                                data: {
                                  input: $input,
                                  password: $password
                                }
                            ) {
                              token,
                              user {
                                emailVerified
                              }
                            }
                        }
                    `,
                    variables: {
                      input: this.form.input,
                      password: this.form.password
                    }
                })
                .then((res) => {
                  this.$store.dispatch('hideSpinner', false)
                  if (res.data.login.user.emailVerified == false) {
                    this.$toasted.show("Your email address is not yet verified",{ 
                      theme: "toasted-primary", 
                      position: "top-center", 
                      type: "error",
                      duration : 2000
                    })
                  } else {
                    this.$toasted.show("Email verification successful",{ 
                      theme: "toasted-primary", 
                      position: "top-center", 
                      type: "success",
                      duration : 2000
                    })
                      setTimeout(() => {
                      this.$router.push('/dashboard')
                    }, 2000);
                  }
                }).catch((err) => {
                  console.log(err)
                  this.$store.dispatch('hideSpinner', false)
                  this.$toasted.show("Error in processing login",{ 
                    theme: "toasted-primary", 
                    position: "top-center", 
                    type: "error",
                    duration : 2000
                  })
                })
            }
        }
    }
  }
</script>
