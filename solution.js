const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

const object1 = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};


Object.entries(object1)
.forEach(element => {

const user = element[0]
const name = Object.values(element[1].name).join('')
const age = element[1].age

console.log(`${user} is called ${name} and is ${age}`)

});

const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

Object.keys(documents).sort()
Object.values(documents).reduce(( acc, cur ) => acc.concat(cur),[])

const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};




const alike = function(obj1, obj2){

const str1 = Object.values(obj1).toString()
const str2 = Object.values(obj2).toString()

return str1 === str2 ? 'alike' : 'not alike'

}

alike(book1, book2)
