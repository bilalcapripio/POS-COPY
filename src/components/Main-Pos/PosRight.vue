<template>
    <div>
        <div class="">
            <div class="col-md-12">
                <div class="container-fluid pt-2">
                    <div class="card border-top border-primary">
                        <div class="card-header">                                                                      
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-group pt-2">
                                        <select id="" class="form-control">
                                            <option value="1">All Categories</option>
                                            <option value="2">Watches</option>
                                            <option value="3">Adidas</option>
                                            <option value="4">Nike</option>
                                            <option value="5">Watches</option>
                                            <option value="6">Adidas</option>
                                            <option value="7">Nike</option>
                                            <option value="8">Watches</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group pt-2">
                                        <input type="text" class="form-control" placeholder="Filters Items">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary">All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="overflow-y: scroll;min-height: 100px;height:600px; overflow-x:hidden" class="over p-1">
                                <div class="row mt-2">
                                    <div class="col-md-3 col-6" style="cursor: pointer;"  id="printableArea" v-for="(data,index) in itemData" @click="addTableRow(index)" v-bind:key="data.id">
                                        <div class="box box-default bg-success border" style="border-radius:5px">
                                            <span class="badge badge-danger push-right">Qty:{{data.available_quantity}}</span>
                                            <div class="box-body box-profile">
                                                <center class="pt-1">
                                                    <img :src="'http://192.168.100.9/Project_Laravel/public/images/'+data.image" alt="Product Image" width="80" class="img-responsive border border-gray">
                                                </center>
                                                <center class="py-3">
                                                    <label class="text-center" style="cursor: pointer; color:black;">{{data.item_name}}
                                                        <br>    
                                                        <span>{{data.sales_price}}</span>
                                                    </label>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'PosLeft',
    data() {
        return {
            itemData:[],
            sendArr:[],
        }
    },
    mounted(){
        this.getitemsData()
    },
    methods:{
            getitemsData: function(){
                axios.get("http://192.168.100.9/Project_Laravel/public/api/item")
                // return promise
                .then((res)=>{
                    this.itemData = res.data;
                        // console.log(res.data);
                })
                // catch error
                .catch(error=>{
                    console.table(error) 
                })
                
            },
            addTableRow: function(index){
                let spData = this.itemData[index]
                let tax_amount = spData.price * (spData.tax / 100);
                let sendData = { 
                    'item_name': spData.item_name,
                    'item_id': spData.id,
                    'stock':spData.available_quantity,
                    'qty':1,
                    'discount':0,
                    'tax_amount': tax_amount,
                    'price':spData.sales_price,
                    'tax':spData.tax_id,
                    'subtotal':spData.sales_price,

                }
                this.sendArr.push(sendData);
                this.$store.state.selectedData = this.sendArr
                // console.log(this.$store.state.selectedData)
            },
    }

}
</script>
<style lang="">

</style>