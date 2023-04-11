const { createApp } = Vue

  createApp({
    data() {
      return {
        random_mail_url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        random_mail: [],
        emails_to_generate: 10,

      }
    },
    mounted(){
       
            for (let index = 0; index < this.emails_to_generate; index++) {
                axios
                .get(this.random_mail_url)
                .then(response => {
                console.log(response.data.response);
                this.random_mail.push(response.data.response)
            });
                
            }
        
    }
  }).mount('#app')