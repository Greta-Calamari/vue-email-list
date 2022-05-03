const app = new Vue({
    el:'#app',
    data:{
        email:[],

        

    },
    methods:{
        
        

    },
    created(){
        for(let i=0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                
                this.email.push(res.data.response);
                console.log(res.data.response)
            
            
                
            
           

                



        }).catch((error)=>{
            console.log(error);
        })
    }
   }

})
