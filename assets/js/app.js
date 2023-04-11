const { createApp } = Vue

  createApp({
    data() {
      return {
        random_mail_url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        my_data: null,
        random_mail: [],

      }
    },
    mounted(){
       
            for (let index = 0; index < 10; index++) {
                axios
                .get(this.random_mail_url)
                .then(response => {
                console.log(response.data.response);
                this.my_data = response.data
                this.random_mail.push(response.data.response)
            });
                
            }
        
    }
  }).mount('#app')