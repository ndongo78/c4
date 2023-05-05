
//? Ecrire une fonction qui prend un tableau de nombres comme argument et
//?  qui utilise la méthode forEach pour afficher chaque nombre dans la console.

// function  showTable(tableau) {
//     tableau.forEach(function(number){
//         console.log(number)
//     })
// }
// const showTable =(array)=>array.forEach(number=>console.log(number));
// const numbers=[78,100,1,23,80];
// const persons=["John", "bill", "tomorrow", "Zack"];
// showTable(numbers);
// showTable(persons);

//? Ecrire une fonction qui prend un tableau de nombres comme argument et
//?  qui utilise la méthode map pour retourner un nouveau tableau avec chaque 
//? nombre multiplié par deux.

// const fruits=["banana", "cerise", "orange", "mangue"];
// const numbers=[78,100,1,23,80];
// //map 
// const mesFruits =fruits.map(fruit=>fruit)
// console.log(mesFruits)

// function multNumber (array){
//   array.map(function(number){
//      console.log(number)
//   })
// }
// const multipliNumber=(array)=>array.map(number=>console.log(number *2))
// multipliNumber(numbers)

// const numbers=[78,-1,1,23,80,1230];

//recuper dans le tableau les nbres > 10;
//  const newNumbers=numbers.find(number=> number >10)
//  console.log(newNumbers)

//? Ecrire une fonction qui prend un tableau de nombres comme argument et
//?  qui utilise la méthode filter pour afficher chaque nombre dans la console tous inferieur 100.

// const newNumbers=numbers.every(number=> number > 10);
// console.log(newNumbers)

// const sumArray=numbers.reduce((total,x)=>total+x)
// console.log(sumArray)

//getter et setter

// const Person=function(name,email,phone,notes,langue){
//         this.name = name;
//         this.email = email;
//         this.phone= phone;
//         this.notes=notes;
//         this.langue=langue;
// }

// const person1=new Person("John","john@exemple.com","12585965","12","fr")

//? imaginons on a un tableaux users qui est vide chaque fois que le user se connecte sur notre site
//? nous ajoutons ses informations dans notre tableau users utiliser la factorie pour creer un 
//? object qui contient les informtions du user



//? Creer une factorie User qui prend name email password et address du user
//? avec le contructor creer 3 user puis ajouter les dans le tableau users affiche users
//? afficher tous les names des elements disponibles dans le tableau users

// const users=[];

// function User(name,email,password,address){
//   this.name = name;
//   this.email=email;
//   this.password=password;
//   this.address=address;
// }

// const user1= new User("Bob","bob@gmail","123456","1 rue de paris")
// const user2= new User("Tom","tom@gmail","123456","1 rue de paris")
// const user3= new User("Jerry","jerry@gmail","123456","1 rue de paris")
// users.push(user1,user2,user3)

// const showItems=(user)=>console.log(user.name)
// console.log(users)

// // users.forEach(showItems)
// // users.map(showItems)
// // for(let i=0; i<users.length; i++){
// //     //console.log(users[i].name)
// //     showItems(users[i])
// // }


// const person={
//     name: 'John',
//     email: 'john@example.com',
//     phone:"0621556566",
//     notes:[10,15,20],
//     langue:"",
//     // get  hello(){
//     //     console.log(`Bonjour  ${this.name}`)
//     // },
//   set setlan (lan){
//      return this.langue =lan
//   }
// }

// //heritage de lobject person
// User.prototype =person;

// const user4= new User("Bob","bob@gmail","123456","1 rue de paris")

// person.notes.reduce((total,value)=>console.log(total+value))

// // for( let i=0; i < person.notes.length; i++ ){
// //   console.log(person.notes[i])
// // }

// for(let x in person){
//     console.log(person[x])
// }


// function Grosery(fruits,legumes,boissons,gateaux,sucreries){
//     this.fruits=fruits;
//     this.legumes=legumes;
//     this.boissons=boissons;
//     this.gateaux=gateaux;
//     this.sucreries=sucreries;
// }
// const mamaCita= new Grosery("Fruits","Legumes","Boissons","Gateaux","Sucreries");

// const auchan={
//       multimedia:"Informative",
//       presse:"magasines",
//       jouer:"jeux"
// }
//  Grosery.prototype=auchan;

//  const magasineAuchan=new Grosery("Fruits","Legumes","Boissons","Gateaux","Sucreries") 

//  console.log(magasineAuchan.jouer)

// const magasine=Object.create(auchan,{
//   heureOpen: {
//     heure:18
//   }
// })

// class User {
//    constructor(name,email,password){
//     this.name=name;
//     this.email=email;
//     this.password=password
//    }

//    //getter
//    get getUserName(){
//       return this.name;
//    }
//   //method ou function
//    fullName() {
//     return console.log(`Bonjour: ${this.name}`)
//    }

//  set changeName(name){
//   return  this.name =name;
//  }
// }

// const user1= new User("Bob","email@yahoo.fr","12345")

// console.log(user1.getUserName)

//? Ecrire une classe Person qui les properties suivant:nom , prenom et  age
//? la classe doit avoir une methode getInfos qui return le nom prenom et age


// class Person {

//     constructor(nom,prenom,age){
//         this.nom=nom;
//         this.prenom=prenom;
//         this.age=age;
//     }

//     getInfos(){
//         return this.nom + " " + this.prenom + " " + this.age;
//     }
// }
// const user= new Person("Bob","Doe",20)
// console.log(user.getInfos())

//? Ecrire une classe Animal qui les properties suivant:nom , type
//? la classe doit avoir une methode makeSound qui return une chaine caractere avec le son de l'animal

//creer notre class

// class Animal {
//     constructor(nom,type){
//         this.nom=nom;
//         this.type=type;
//     }
//   //switch
//    makeSound(){
//     switch (this.type) {
//         case "chien":
//          return "woof woof";
//             break;
//         case "chat":
//           return  "meow";
//          break;
//          case "oiseau":
//          return   "tweet tweet";
//          break; 
//         default:
//             return "???";
//     }
//     //  if(this.type === "chien"){
//     //     return "woof woof";
//     //  }else if(this.type === "chat"){
//     //     return "meow";
//     //  }else if(this.type === "oiseau"){
//     //     return "tweet tweet";
//     //  }else{
//     //     return  "???"
//     //  }
//    }
// }

// const monChien= new Animal("Bob","chat");

// console.log(monChien)


// class Car {
//     #count=0;
//     constructor(brand,levi, kilo, speed){
//         this.brand=brand;
//         this.levi=levi;
//         this.kilo=kilo;
//         this.speed=speed;
//     }

//     present(){
//         return "J'ai une voiture de marque : "+this.brand
//     }
//    showCount(){
//         return this.#count +1;
//     }
// }

// class Model extends  Car{
//     constructor(brand,speed,model){
//        super(brand,speed,)
//         this.model=model;
// }
//  showMyCar(){
//     return this.present() + " " + "et le model est"  +" "+  this.model
//  }
// }
// const myCar=new Model("PSA","208",);
// console.log(myCar.showCount())

//? Ecrire une classe Rectangle qui les properties suivant:longeur , largeur
//? la classe doit avoir une methode calculSurface qui return la surface du triange

// class Rectangle {
//     constructor(longueur,largeur){
//         this.longueur=longueur;
//         this.largeur=largeur;
//     }
//     calculSurface() {
//         return this.longueur * this.largeur;
//     }
// }
// const myRectangle=new Rectangle(10,20);
// console.log(myRectangle)

//? créer une class qui permettra de représenter un livre (on construira l'objet avec un titre et un nombre de page).
//?  On aura ensuite plusieurs propriétés / méthodes utiles

//?  1 page, renverra la page courante du livre (1 par défaut)

//?  2 pageSuivant(), permet de tourner la page et incrémentera la page courante

//?  3 fermer() permet de fermer un livre (revenir à la 1ère page)

//?   Ensuite on créera une class Library pour organiser nos livres.

//?  1 addBook(), permet de rajouter un livre à la bibliothèque

//?  2  addBooks([]) ,permet de rajouter plusieurs livres d'un coup (on lui passera un tableau)

//?  3  findBooksByLetter('b'), permet de lister tous les livres qui ont un titre qui commence par la lettre indiquée

class Book {
    #page=1;
    constructor(title,pages){
        this.title =title;
        this.pages=pages;
    }

     page(){
        return this.#page;
    }

    pageSuivant(){
         if(this.#page < this.pages){
        return    this.#page ++;
         }
    }

    fermer(){
        this.#page =1;
    }
}
// const petitFrance=new Book("petit france",10)
// //premier page
// console.log(petitFrance.page())
// //page suivant
// console.log("page suivant",petitFrance.pageSuivant())
// //fermer le livre
// console.log("page close",petitFrance.fermer())

//?   Ensuite on créera une class Library pour organiser nos livres.

//?  1 addBook(), permet de rajouter un livre à la bibliothèque

//?  2  addBooks([]) ,permet de rajouter plusieurs livres d'un coup (on lui passera un tableau)

//?  3  findBooksByLetter('b'), permet de lister tous les livres qui ont un titre qui commence par la lettre indiquée



class Library extends Book{
    #bibliothèque=[];

    get getAllBooks(){
        return this.#bibliothèque
    }
    addBook(book){
     this.#bibliothèque.push(book);
    }

    addBooks(books){
        books.forEach(this.addBook,this);
    }
    findBooksByLetter(letter){
        return this.#bibliothèque.filter(book=>book.title[0].toLowerCase() === letter.toLowerCase());
    console.log("newArray",newArray)
    }

    sumprimerUnLiver(letter){
        return this.#bibliothèque.filter(book=>book.title[0].toLowerCase() != letter.toLowerCase());
    }
}

const petitFrance=new Book("petit france",10);
const library=new Library();


//ajouter un livre
library.addBook(petitFrance)
//ajouter plusieur livres
library.addBooks(
    [
        new Book("Seigneur de anneaux",100),
        new Book("World trading",200),
        new Book("Seigneur de anneaux",100),
        new Book("Les masters js",150),
    ]
)

console.log("Ma bibliothèque avant",library.getAllBooks)
//recherche un livre 
console.log("Les livres trouve par son caracteres",library.findBooksByLetter("w"))
//sumprime
console.log("Ma bibliothèque apres sumprimer les livres commencant par s",library.sumprimerUnLiver("l"))




