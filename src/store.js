import Vuex from 'vuex';
import axios from 'axios';
const store = new Vuex.Store({  
    state:{
        bundle:{ 
            getitemsData: function(){
                axios.get("http://192.168.100.9/Project_Laravel/public/api/item")
                // return promise
                .then((res)=>{
                    this.itemData=res.data;
                        console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });

            },
            // Close getitemsData

            addTableRow:function(index){ 
            var test = this.itemData[index];    
            /*this.counter++;`${this.firstName[0]} ${this.lastName[0]}`*/
            this.res = [
                test['item_name'],
                test['sales_price'],
                test['available_quantity'],1
            ]
            /*this.itemDataArr.push(`${test['item_name']}, ${test['sales_price']}, ${test['available_quantity']}`)*/
            this.itemDataArr.push(this.res)
            console.table(this.itemDataArr)
            /*  this.quantity++;*/
            },

            // alert('Vue js')
            deleteTableRow: function (idx) { 
                this.counter--;
                this.itemDataArr.splice(idx, 1);   
                this.quantity--;
            },

            ProAdd(index){
                this.itemDataArr[index][3]++;
            },

            ProRem(index){
                this.itemDataArr[index][3]--;
            },

            totalAmount(){
                var sum = 0;
                this.itemDataArr.forEach(value => {
                    sum += value[1];
                    // console.log(sum);
                })
                console.log(sum);
                return sum;
            },

            Savesure(){
                confirm('Are you sure to save this payment');
            },

            printDiv() {
                    var printContents = document.getElementById('printableArea').innerHTML;
                    var originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContents;
                    window.print();
                    document.body.innerHTML = originalContents;
            }

        }
    },

    mutations:{},

    actions:{},  

    getters:{},

})
export default store;