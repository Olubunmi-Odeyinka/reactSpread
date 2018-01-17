import delay from './delay';
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let spreadDatadb =
  {
    data: [
      {
        __key__: 1,
        A: 'Col 1',
        B: 1,
        C: 5,
        E: 1
      },
      {
        __key__: 2,
        A: 'Col 1',
        B: 2,
        C: 4,
        E: 1
      },
      {
        __key__: 3,
        A: 'Col 1',
        B: 3,
        C: 3,
        E: 1
      },
      {
        __key__: 4,
        A: 'Col 1',
        B: 4,
        C: 2,
        E: 1
      },
      {
        __key__: 5,
        A: 'Col 1',
        B: 5,
        C: 1,
        E: 1
      }
    ],
    definition: {
      A: {
        type: 'string',
        label: 'TEXT'
      },
      B: {
        type: 'number',
        label: 'NUMBER 1',
        focus: true
      },
      C: {
        type: 'number',
        label: 'NUMBER 2'
      },
      D: {
        type: 'compute',
        label: 'SUM',
        computeData: ['B', 'C'],
        computeFunction: function (dataArray) {
          var sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            if (!isNaN(dataArray[i])) {
              sum += dataArray[i];
            }else{
              return;
            }
          }
          return sum;
        }
      },
      E: {
        type: 'select',
        label: 'DROPDOWN',
        dropdownData: [
          {text: '1', value: 1},
          {text: '2', value: 2},
          {text: '3', value: 3}
        ]
      }
    }
  };

class spreadDataApi {
  static getSpreadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, spreadDatadb));
      }, delay);
    });
  }

  static saveSpreadData(spreadData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        //Todo: validation before db update
        spreadDatadb = spreadData;

        resolve(Object.assign({}, spreadData));
      }, delay);
    });
  }

}

export default spreadDataApi;
