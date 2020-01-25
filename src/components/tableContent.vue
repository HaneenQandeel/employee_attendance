<template>
  <div class="table-content">
    <label for="start">Start month:</label>
    <input type="month" v-on:change="changeMonth()" v-model="month.name" min="2020-01" value="2020-01">

    <table border="1px">

        <tr>
          <th>Employee Name</th>
          <th v-for="(field,id) in fields" v-bind:key="id">
           <span>{{field}}</span>
          </th>
           <th v-for="(daysNumbers,id) in daysNumber" v-bind:key="id">
          <span>{{daysNumbers.name}}</span>
           </th>


        </tr>


        <tr v-for="(employee,id) in employees" v-bind:key="id">
          <td>{{employee}} </td>
           <td v-for="(field,id) in fields" v-bind:key="id">
           <span v-if="field.includes('Sat') || field.includes('Fri')"></span>
           <span v-else><input type="checkbox" :class="employee" :id="employee+'_'+id" :value="employee+'_'+id"  v-on:change="checkcount(employee+'_'+id)" checked='1'/></span>
           </td>
           <td :id="employee+'_absent'"></td>
            <td :id="employee+'_attend'"></td>
        </tr>
        <tr>
        </tr>


    </table>
    <p>{{result}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [],
        datestring:[],
        isCheckAll: false,
        fields:[],
        result:'',
        daysNumber: [
          {
            name: 'Number of absences Days',
          },
          {
            name: 'Number of Attend Days',
            value:'number_attend'
          }],
        dateArr:[],
        month:{
          name:'2020-01'
        },
        employees:[
            'haneen',
            'ahmed',
            'Salem Qandeel',
            'OMar Jaber'
        ]
      }
    },
    methods: {
      getDateArray(start, end) {
        var dt = new Date(start);
        while (dt <= end) {
          this.arr.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);

        }
        return this.arr;

      },
      checkcount(employee){
        var attend=0
        var absent=0
        var state_value = document.getElementById(employee).getAttribute("checked");
        if(state_value==1){
          document.getElementById(employee).setAttribute("checked", "0");
        }else{
            document.getElementById(employee).setAttribute("checked", "1");
        }

        var emp_name = employee.split('_')[0]
        var x = document.getElementsByClassName(emp_name);
        for (var i = 0; i < x.length; i++) {
          console.log(x[i].checked)
          if(x[i].checked==1){
            attend++;
          }else{
            absent++;
          }
        }
        document.getElementById(emp_name+'_absent').innerHTML=absent;
        document.getElementById(emp_name+'_attend').innerHTML=attend;

      },
      changeMonth() {
        //  for (var sum = 0; sum < this.daysNumber.length; sum++) {
        //  this.result += this.daysNumber[sum].number_attend;
        //  console.log('ggggggggg', this.result)
        //  }

        var yearmonth = `${this.month.name}`;
        var selected_year = yearmonth.split('-')[0];
        var selected_month = yearmonth.split('-')[1];

        var month_date_count = new Date(selected_year, selected_month, 0).getDate();

        var startDate = new Date(yearmonth + "-1");
        var endDate = new Date(yearmonth + "-" + month_date_count);
        this.dateArr.length = 0
        this.dateArr.splice()

        this.dateArr = this.getDateArray(startDate, endDate);
          //console.log(this.fields.length)
        var a = this.datestring.indexOf('Sat')
        console.log('fffffffff',a)

        this.fields.splice(0,this.fields.length)
        //console.log(this.fields.length)
        for (var i = 0; i < this.dateArr.length; i++) {
          var d = this.dateArr[i];

          // var ss =d.toString().split(' ')[0]

          this.datestring = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "(" + d.toString().split(' ')[0] + ")";

          this.fields.push(this.datestring);
        }


      }


    },
    created(){
       var yearmonth = `${this.month.name}`;
        var selected_year = yearmonth.split('-')[0];
        var selected_month = yearmonth.split('-')[1];

        var month_date_count = new Date(selected_year, selected_month, 0).getDate();

        var startDate = new Date(yearmonth + "-1");
        var endDate = new Date(yearmonth + "-" + month_date_count);

        var a = this.datestring.indexOf('Sat')
        console.log('fffffffff',a)
        this.dateArr = this.getDateArray(startDate, endDate);
        for (var i = 0; i < this.dateArr.length; i++) {
          var d = this.dateArr[i];
          this.datestring = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "(" + d.toString().split(' ')[0] + ")";
          this.fields.push(this.datestring);

        }





      }


  }









</script>
