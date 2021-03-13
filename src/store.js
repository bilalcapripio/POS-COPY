import Vuex from 'vuex';
// import axios from 'axios';
const store = new Vuex.Store({  
    state:{
        selectedData:[],
        holdListData:[],
        holdListRefNo:[],
        // alldata:{
    
        //     // Close getitemsData

        //     addTableRow:function(index){ 
        //     var test = this.itemData[index];    
        //     this.res = [
        //         test['item_name'],
        //         test['sales_price'],
        //         test['available_quantity'],
        //         1
        //     ]

        //     this.itemDataArr.push(this.res)
        //     console.table(this.itemDataArr)
        //     },

        //     // alert('Vue js')
        //     deleteTableRow: function (idx) { 
        //         this.counter--;
        //         this.itemDataArr.splice(idx, 1);   
        //         this.quantity--;
        //     },

        //     ProAdd(index){
        //         this.itemDataArr[index][3]++;
        //     },

        //     ProRem(index){
        //         this.itemDataArr[index][3]--;
        //     },

        //     totalAmount(){
        //         var sum = 0;
        //         this.itemDataArr.forEach(value => {
        //             sum += value[1];
        //             // console.log(sum);
        //         })
        //         console.log(sum);
        //         return sum;
        //     },

        //     Savesure(){
        //         confirm('Are you sure to save this payment');
        //     },
        // }
    },

    mutations:{},

    actions:{},  

    getters:{},

})
export default store;