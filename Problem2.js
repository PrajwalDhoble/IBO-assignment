//Problem statement :- 1

// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

// */

//Solution :- 

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


function getUniqueProductCount2(listOfProducts){

    let arr1 = [...new Set(listOfProducts.map(e => e.productName))];
    let arr2 = [];
    
    for(let i=0; i<arr1.length; i++)
    {
        let obj = {}
        for(let j=0; j<listOfProducts.length; j++)
        {
          if(arr1[i] == listOfProducts[j].productName)
          {
            if(Object.keys(obj).length == 0)
            {
                obj = listOfProducts[j];
            }
            else
            {
                obj.quantity += listOfProducts[j].quantity
            }
         }
      }
       arr2.push(obj);
    }
    console.log(arr2)
    }
    
    getUniqueProductCount2(listOfProducts)