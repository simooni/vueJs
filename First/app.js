//  Vue.createApp({
//     data(){
//         return{
//             goals: [],
//             entredValue: '',
//         }
//     },
//     methods: {
//         addGoal(){
//             this.goals.push(this.entredValue);
//             this.entredValue ='';
//         }
//     },

//  }).mount('#app');
const app = Vue.createApp({
    data() {
        return {
            courseGoal:'Finish the course and learn vue!',
            vueLink: 'https://vuejs.org/',
            learn: 'Learn Vue!',
            master:'Master Vue!',
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return this.learn;
            }else{
                return this.master;
            }

        }
    },
}).mount('#user-goal');