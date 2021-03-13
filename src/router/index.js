import { createWebHistory, createRouter } from "vue-router";
import Content from '@/components/Content.vue';
import pos from '@/components/Main-Pos/Pos.vue';
import Customers from '@/components/Customers/Customer-List.vue';
import Add_Customer from '@/components/Customers/New-Customer.vue';
import Expence_Category from '@/components/Expence/Category-List.vue';
import Add_Expence_Category from '@/components/Expence/Expence-Category.vue';
import Expences from '@/components/Expence/Expence-List.vue';
import Add_Expence from '@/components/Expence/New-Expence.vue';
import Add_item_Brand from '@/components/Items/Brand.vue';
import Print from '@/components/Items/Print.vue';
import Send from '@/components/Sms/Send.vue';
import  Template from '@/components/Sms/Template.vue';
import item_Brand from '@/components/Items/Brand-List.vue';
import Add_item_Category from '@/components/Items/Category.vue';
import item_Category from '@/components/Items/Category-List.vue';
import items from '@/components/Items/item-List.vue';
import Add_item from '@/components/Items/New-Item.vue';
import Countries from '@/components/Places/Country-List.vue';
import Add_Country from '@/components/Places/Country.vue';
import States from '@/components/Places/State-List.vue';
import Add_State from '@/components/Places/State.vue';
import Purchases from '@/components/Purchase/Purchase-List.vue';
import Add_Purchase_Return from '@/components/Purchase/Purchase-Return.vue';
import Purchase_Returns from '@/components/Purchase/Purchase-RL.vue';
import Add_Purchase from '@/components/Purchase/Purchase.vue';
import Expence_Item_Reports from '@/components/Report/Expence-List-Report.vue';
import Expence_Report from '@/components/Report/Expence-Report.vue';
import Item_Purchase_Report from '@/components/Report/Item-Purchase-Report.vue';
import Item_Sales_Report from '@/components/Report/Item-Sales-Report.vue';
import Profit_Loss_Report from '@/components/Report/Profit-Loss-Report.vue';
import Purchase_Payment_Report from '@/components/Report/Purchase-Payment-Report.vue';
import Purchase_Report from '@/components/Report/Purchase-Report.vue';
import Purchase_Return_Report from '@/components/Report/Purchase-Return-Report.vue';
import Sales_Payment_Report from '@/components/Report/Sales-Payment-Report.vue';
import Sales_Report from '@/components/Report/Sales-Report.vue';
import Sales_Return_Report from '@/components/Report/Sales-Return-Report.vue';
import Stock_Report from '@/components/Report/Stock-Report.vue';
import Add_Sale from '@/components/Sales-Page/New-Sales.vue';
import Sales from '@/components/Sales-Page/Sales-List.vue';
import UpdateSale from '@/components/Sales-Page/updateSale.vue';
import Add_Sale_Return from '@/components/Sales-Page/Sales-Return.vue';
import Sale_Returns from '@/components/Sales-Page/Sales-RL.vue';
import Currency from '@/components/Setting/Currency.vue';
import Add_Currency from '@/components/Setting/New-Currency.vue';
import Payments from '@/components/Setting/Payments';
import Password from '@/components/Setting/Password.vue';
import Payment from '@/components/Setting/Payment.vue';
import Profile from '@/components/Setting/Profile.vue';
import Site from '@/components/Setting/Site.vue';
import Tax from '@/components/Setting/Tax.vue';
import Add_Tax from '@/components/Setting/New-Tax.vue';
import Add_Unit from '@/components/Setting/New-Unit.vue';
import Unit from '@/components/Setting/Unit.vue';
import Suppliers from '@/components/Suppplier/Supplier-List.vue';
import Add_Supplier from '@/components/Suppplier/Supplier.vue';
import Role from '@/components/Users/Role.vue';
import Users from '@/components/Users/User-List.vue';
import Add_User from '@/components/Users/User.vue';
import Authentication from '@/components/Authentication';
import NewRole from '@/components/Users/NewRole';

// Update Pages
import UpdateCustomer from '@/components/Customers/UpdateCustomer.vue';
import UpdateSupplier from '@/components/Suppplier/UpdateSupplier.vue';
import UpdateItem from '@/components/Items/UpdateItem.vue';
import UpdateCategorylist from '@/components/Items/UpdateCategorylist.vue';
import UpdateBrand from '@/components/Items/UpdateBrand.vue';
import UpdateExpenceCategory from '@/components/Expence/UpdateExpenceCategory.vue';
import UpdateExpence from '@/components/Expence/UpdateExpence.vue';
import UpdateCountry from '@/components/Places/UpdateCountry.vue';
import UpdateState from '@/components/Places/UpdateState.vue';
import UpdateRole from '@/components/Users/UpdateRole.vue';
import UpdateTax from '@/components/Setting/UpdateTax.vue';
import UpdateUnit from '@/components/Setting/UpdateUnit.vue';
import UpdateNewCurrency from '@/components/Setting/UpdateNewCurrency.vue';
import UpdatePayments from '@/components/Setting/UpdatePayments.vue';






// Update Pages

const routes=[
    {path:'/', name:'Content', component:Content},
    {path:'/Authentication',name:'Authentication' ,component:Authentication},
    {path:'/UpdateCustomer/:id',name:'UpdateCustomer' ,component:UpdateCustomer},
    {path:'/UpdateSale/:id',name:'UpdateSale' ,component:UpdateSale},
    {path:'/UpdateSupplier/:id',name:'UpdateSupplier' ,component:UpdateSupplier},
    {path:'/UpdateSupplier/:id',name:'UpdateSupplier' ,component:UpdateSupplier},
    {path:'/UpdateCategorylist/:id',name:'UpdateCategorylist' ,component:UpdateCategorylist},
    {path:'/UpdateItem/:id',name:'UpdateItem' ,component:UpdateItem},
    {path:'/UpdateBrand/:id',name:'UpdateBrand' ,component:UpdateBrand},
    {path:'/UpdateExpence/:id',name:'UpdateExpence' ,component:UpdateExpence},
    {path:'/UpdateExpenceCategory/:id',name:'UpdateExpenceCategory' ,component:UpdateExpenceCategory},
    {path:'/UpdateCountry/:id',name:'UpdateCountry' ,component:UpdateCountry},
    {path:'/UpdateState/:id',name:'UpdateState' ,component:UpdateState},
    {path:'/UpdateRole/:id',name:'UpdateRole' ,component:UpdateRole},
    {path:'/UpdateTax/:id',name:'UpdateTax' ,component:UpdateTax},
    {path:'/UpdateUnit/:id',name:'UpdateUnit' ,component:UpdateUnit},
    {path:'/UpdateNewCurrency/:id',name:'UpdateNewCurrency' ,component:UpdateNewCurrency},
    {path:'/UpdatePayments/:id',name:'UpdatePayments' ,component:UpdatePayments},







    


    {path:'/NewRole',name:'NewRole' ,component:NewRole},
    {path:'/pos', name:'pos', component:pos},
    {path:'/Customers', name:'Customers', component:Customers},
    {path:'/Add_Customer', name:'Add_Customer', component:Add_Customer},
    {path:'/Expence_Category', name:'Expence_Category', component:Expence_Category},
    {path:'/Add_Expence_Category', name:'Add_Expence_Category', component:Add_Expence_Category},
    {path:'/Expences', name:'Expences', component:Expences},
    {path:'/Add_Expence', name:'Add_Expence', component:Add_Expence},
    {path:'/Print', name:'Print', component:Print},
    {path:'/Payments', name:'Payments', component:Payments},
    {path:'/Send', name:'Send', component:Send},
    {path:'/Template', name:'Template', component:Template},
    {path:'/Add_item_Brand', name:'Add_item_Brand', component:Add_item_Brand},
    {path:'/item_Brand', name:'item_Brand', component:item_Brand},    
    {path:'/Add_item_Category', name:'Add_item_Category', component:Add_item_Category},
    {path:'/item_Category', name:'item_Category', component:item_Category},    
    {path:'/items', name:'items', component:items},
    {path:'/Add_item', name:'Add_item', component:Add_item},
    {path:'/Countries', name:'Countries', component:Countries},
    {path:'/Add_Country', name:'Add_Country', component:Add_Country},    
    {path:'/Unit/add', name:'Add_Unit', component:Add_Unit},
    {path:'/Tax/add', name:'Add_Tax', component:Add_Tax},
    {path:'/States', name:'States', component:States},
    {path:'/Add_State', name:'Add_State', component:Add_State},
    {path:'/Purchases', name:'Purchases', component:Purchases},
    {path:'/Add_Purchase_Return', name:'Add_Purchase_Return', component:Add_Purchase_Return},    
    {path:'/Purchase_Returns', name:'Purchase_Returns', component:Purchase_Returns},
    {path:'/Add_Purchase', name:'Add_Purchase', component:Add_Purchase},
    {path:'/Expence_Item_Reports', name:'Expence_Item_Reports', component:Expence_Item_Reports},
    {path:'/Expence_Report', name:'Expence_Report', component:Expence_Report},    
    {path:'/Item_Purchase_Report', name:'Item_Purchase_Report', component:Item_Purchase_Report},
    {path:'/Item_Sales_Report', name:'Item_Sales_Report', component:Item_Sales_Report},
    {path:'/Profit_Loss_Report', name:'Profit_Loss_Report', component:Profit_Loss_Report},
    {path:'/Purchase_Payment_Report', name:'Purchase_Payment_Report', component:Purchase_Payment_Report},    
    {path:'/Purchase_Report', name:'Purchase_Report', component:Purchase_Report},
    {path:'/Purchase_Return_Report', name:'Purchase_Return_Report', component:Purchase_Return_Report},
    {path:'/Sales_Payment_Report', name:'Sales_Payment_Report', component:Sales_Payment_Report},
    {path:'/Sales_Report', name:'Sales_Report', component:Sales_Report},    
    {path:'/Sales_Return_Report', name:'Sales_Return_Report', component:Sales_Return_Report},
    {path:'/Stock_Report', name:'Stock_Report', component:Stock_Report},
    {path:'/Add_Sale', name:'Add_Sale', component:Add_Sale},
    {path:'/Sales', name:'Sales', component:Sales},    
    {path:'/Add_Sale_Return', name:'Add_Sale_Return', component:Add_Sale_Return},
    {path:'/Sale_Returns', name:'Sale_Returns', component:Sale_Returns},
    {path:'/Currency', name:'Currency', component:Currency},    
    {path:'/Currency/add', name:'Add_Currency', component:Add_Currency},
    {path:'/Password', name:'Password', component:Password},
    {path:'/Payment', name:'Payment', component:Payment},
    {path:'/Profile', name:'Profile', component:Profile},
    {path:'/Site', name:'Site', component:Site},    
    {path:'/Tax', name:'Tax', component:Tax},
    {path:'/Unit', name:'Unit', component:Unit},
    {path:'/Suppliers', name:'Suppliers', component:Suppliers},
    {path:'/Add_Supplier', name:'Add_Supplier', component:Add_Supplier},
    {path:'/Role', name:'Role', component:Role},
    {path:'/Users', name:'Users', component:Users},
    {path:'/Add_User', name:'Add_User', component:Add_User},

];
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router