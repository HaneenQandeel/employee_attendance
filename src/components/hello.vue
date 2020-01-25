<template>
  <div>
    <div class="mb-2">
      <b-form-select v-model="selected" class="mt-3" v-on:change="changeMonth()" :options="options"></b-form-select>
      <b-form-checkbox v-model="stickyHeader" inline>Sticky header</b-form-checkbox>
    </div>
    <b-table :sticky-header="stickyHeader" responsive :items="items" :fields="fields">

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
    <span>Number{{result}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: 0,
        selected: null,
        options: [{
            value: null,
            text: 'Please select an month'
          },
          {
            value: '0',
            text: 'January'
          },
          {
            value: '1',
            text: 'February'
          },
          {
            value: '2',
            text: 'March'
          },
          {
            value: '3',
            text: 'April'
          },
          {
            value: '4',
            text: 'May'
          },
          {
            value: '5',
            text: 'June'
          },
          {
            value: '6',
            text: 'July'
          },
          {
            value: '7',
            text: 'August'
          },
          {
            value: '8',
            text: 'September'
          },
          {
            value: '9',
            text: 'October'
          },
          {
            value: '10',
            text: 'November'
          },
          {
            value: '11',
            text: 'December'
          }

        ],
        sum: 0,
        weekdays: [
          'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
        ],

        stickyHeader: true,
        fields: [{
            key: 'id',
            stickyColumn: true,
            isRowHeader: true,
            variant: 'danger'
          },
          {
            key: 'employee_name',
          },
          {

          },
          {
            key: 'Saturday',
            stickyColumn: true,
            variant: 'danger'
          },
          {
            key: 'number_of_absences_days',
          },
          {
            key: 'number_of_attend_days'
          }




        ],
        items: [{
            id: 1,
            'Employee Name': 'Haneen Qandeel',
            's': 1,
            c: 2,
            number_of_attend_days: 3,
            e: 4,
            'number of attends Days': 5,
            'Number of absences Days': 6

          },
          {
            id: 2,
            'Employee Name': 'Ahmed',
            's': 1,
            c: 2,
            number_of_attend_days: 3,
            e: 4,
            'Number of attends Days': 5,
            'Number of absences Days': 6
          },
          {
            id: 3,
            'Employee Name': 'Ahmed',
            's': 1,
            c: 2,
            number_of_attend_days: 3,
            e: 4,
            'Number of attends Days': 5,
            'Number of absences Days': 6
          },
          {
            id: 4,
            'Employee Name': 'Ahmed',
            b: 1,
            c: 2,
            number_of_attend_days: 3,
            e: 4,
            'Number of attends Days': 5,
            'Number of absences Days': 6
          }


        ]
      }
    },
    methods: {
      changeMonth(start, end) {
        var arr = [];
        var dt = new Date(start);
        while (dt <= end) {
          arr.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);
        }
        return arr;
        // console.log(this.weekdays[0])
        // console.log(this.items[0].num)
        // for (var sum = 0; sum < this.items.length; sum++) {
        //   this.result += this.items[sum].number_of_attend_days;
        //   console.log('ggggggggg', this.result)
        // }


        //   for (var day = 0; day <= 30; day++) {
        //     for (var d = day; d < this.weekdays.length; d++) {
        //       console.log('beginhhhhhjjjhhhhh', day+1,this.weekdays[d]);

        //   }



        // }
        // for (var i = 0; i < 12; i++) {
        //   var beginDate = new Date(2020, i)
        //   var lastDate = new Date(2020, i + 1, 0);
        //   console.log('begin datee' + beginDate.getDate() + 'last' + lastDate);
        //   for (var day = 0; day <= 30; day++) {
        //     for (var d = 0; d < this.weekdays.length;) {
        //       console.log('beginhhhhhhhhhh', day + 1, this.weekdays[d]);
        //     }
        //   }


        // }


      }

    }
  }
  // computed:{
  //   addP(){
  //     this.items.forEach(function()) {
  //         this.sum+=this.e
  //     }
  //     return this.sum
  //   }
  // }
</script>
