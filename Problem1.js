//Problem statement :- 1

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

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


function getUniqueProductCount1(listOfProducts) {
    let arr = []
    for (let i = 0; i < listOfProducts.length; i++) {
        let value = (listOfProducts[i].productName)
        arr.push(value)
    }

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let occurences = arr[i];
        if (obj[occurences]) {
            obj[occurences] += 1
        }
        else {
            obj[occurences] = 1
        }
    }
    console.log(obj)
}
getUniqueProductCount1(listOfProducts)


