const app = new Vue({
    el:'#app',
    data:{
        email:[],

        

    },
    methods:{
        random(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=10').then(()=>{
                
            })
        }
        

    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
            for(let i=0; i < 10; i++){
                this.email = res.data.response
                console.log(res.data.response)
                
            }

                



        }).catch((error)=>{
            console.log(error);
        })
    }

})