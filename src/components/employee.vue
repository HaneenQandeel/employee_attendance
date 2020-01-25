<template>
  <div>
    <div class="mb-2">
      <input type="month" v-on:change="changeMonth()" v-model="month" min="2020-01" value="2020-01">
    </div>
    <b-table :sticky-header="stickyHeader" responsive :datestring="datestring" :items="items">

      <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
      <template v-slot:head(id)="scope">
              <div class="text-nowrap">Row ID</div>
</template>

<template v-slot:head()="scope">
  <div class="text-nowrap">
    {{ scope.label }}
  </div>
</template>
    </b-table>
    <b-button variant="outline-primary">Save</b-button>
    <span></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
           arr: [],
        datestring:[],
        dateArr:[],
        month:'2020-01',
        result: 0,
        selected: null,
        sum: 0,
        stickyHeader: true,
        fields:[],
        items: [
          {
            id: 1
          }
          ,
          {
            id: 2
          }

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
      changeMonth() {
        var yearmonth = `${this.month}`;
        var selected_year = yearmonth.split('-')[0];
        var selected_month = yearmonth.split('-')[1];

        var month_date_count = new Date(selected_year, selected_month, 0).getDate();

        var startDate = new Date(yearmonth + "-1");
        var endDate = new Date(yearmonth + "-" + month_date_count);


        this.dateArr = this.getDateArray(startDate, endDate);
        for (var i = 0; i < this.dateArr.length; i++) {
          var d = this.dateArr[i];
          this.datestring = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "(" + d.toString().split(' ')[0] + ")";
          console.log(this.datestring)
        }
      }


    }
  }

</script>
