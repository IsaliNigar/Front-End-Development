//1
//var fullname = "Mina Farzali Faiq"
//netice must be ["Mina","Farzali","Faiq"]

//var fullname = "Mina Farzali Faiq";
//var words = fullname.split (" ");
//console.log(words);

//2
//Alinan yeni arrayi stringee cevirin ama ilk array deyismesin

//3
//Bu arrayde 5 reqeminin nece defe tekrarlandigini gosteren algoritm yazin
//var array=[9,3,14,5,7,65,97,5,82,101,5,73,82,5,101,75,99,80]
//var value= 0;
//for (var i=0; i<array.length; i++) {
//    if (array[i] == 5) {
//        ++value
//    }}
//    console.log ("5 rəqəmi "+ value + " dəfə təkrarlanır" )

//4
//var array=[9,3,14,5,7,65,97,5,82,101,5,73,82,5,101,75,99,80]
//tekrar olunan reqemleri artan sira ile duzun
//var array=[9,3,14,5,7,65,97,5,82,101,5,73,82,5,101,75,99,80];
//var x=array.sort()
//var newArr = []
//for (var i = 0; i < x.length; i++){
//if(x[i]==x[i+1]){
//if (!newArr.includes(x[i])){
//newArr.push(x[i])
//}
//}}

//5
//Arraydeki en boyuk reqemi tapin ve nece defe tekrar olundugunu yazin
// var array=[9,3,14,5,7,65,97,5,82,101,5,73,82,5,101,75,99,80];
// var max = array[0]
// for (var i = 0; i < array.length; i++){
//   if (array[i]>max){
// max=array[i]
//   }}

//6
// Ad ve soyadin bas heriflerini index le tapin ve tapilan melumati arraye yazdırın
// var fullname=”Mina Farzali”;  =>>> [‘M’,’F’]

// var fullname = "Mina Farzali"
// var newFullname = fullname.split (" ")
// var final = []
// for (var i=0; i < fullname.length; i++) {
//   var result = newFullname[i][0];
//   final.push(result)
// }

//Yeni tapshiriq

//1 ilə verilmiş ədəd arasındakı kvadratları cəmini tapın
// var verilmisheded = prompt("Xahiş olunur ədədi daxil edin");
// var sum = 0;
// for (var i =1; i<=verilmisheded; i++) {
//   sum+=i * i;
// }
// console.log(sum)

//2

//Daxil edilən ədədin vurma cədvəlini çap edin
// var daxiledilenede = prompt("Zəhmət olmasa dəyəri daxil edin")
// for (var i = 1; i<11; i++){
//   daxiledilenede*i
//   console.log(`${i} * ${daxiledilenede} =${daxiledilenede*i}`)
// }


//3
//Verilmiş ededin ədədlər array-inin içərisindəki olub olmadigini çap edən proqram yazın.

// var ədəd = prompt("Zəhmət olmasa ədədi daxil edin")
// var array=[9,3,14,5,7,65,97,5,82,101,5,73,82,5,101,75,99,80]
// for (var i =0; i<array.length; i++){
//   if (ədəd == array[i]) {
//   console.log("Axtarılan ədəd tapıldı " + ədəd)
// }}

//4
//İlk 100 Fibonacci ədədini çap edən funksiya yazın. (Fibonacci ədədləri barədə bilmirsinizsə araşdırın.)

// var x = 0
// var y = 1
// var z = 0
// for (var i=0; i<100; i++) {
//   z=x+y
//   y=x
//   x=z
//   console.log(z)
// }

// var x = 0
// var y = 1
// for (var i=0; i<100; i++) {
//   z=x+y
//   y=x
//   x=z
//   console.log(z)
// }

//5
//Daxil edilmiş sözün palindrom olub olmadığını yoxlayan proqram yazın

// var söz = prompt('Zəhmət olmasa sözü daxil edin')
// var reverse = "";
// for (var i =söz.length-1; i>=0;i--){
//   reverse+=söz[i]}
//   if (söz==reverse){
//     console.log("uğurlu "+ reverse)}
//     if (söz!==reverse) {
//       console.log("uğursuz "+ reverse)};

//6
//Hərflərinin sayı cüt ədəd olan sözləri iki bərabər hissəyə ayıraraq çap edən proqram yazın

// var soz = prompt('Zəhmət olmasa sözü daxil edin')
// if (soz.length%2==0) {
//   var ortaindex = soz.length/2;
//   var ilkhisse = soz.slice(0,ortaindex);
//   var ikincihisse = soz.slice(ortaindex)
//   console.log(ilkhisse + " " + ikincihisse)}
//    else {
//      console.log("Bu sözdə hərflərin sayının cəmi tək ədəddir")
//    } 

//7
//İstifadəçinin yaşı 30-dan kiçikdirsə istifadəçinin yaşının kvadratını ekrana çap edin

// var rəqəm = prompt('Zəhmət olmasa yaşınızı qeyd edin')
// if (rəqəm < 30) {
//   var kvadrat = rəqəm**2
//   console.log(kvadrat)
// } else {
//   console.log ("Yaşınız 30-dan çoxdur")
// }

//8
//İstifadəçinin yaşı 30-dan kiçikdirsə istifadəçinin yaşının kvadratını ekrana çap edin
//Yaş 30-40 aralığındadırsa daxil edilən ədədin son rəqəmini ekrana çap edin
//Yaş 0-dan kiçik vəya 100-dən böyükdürsə ekrana "Düzgün məlumat daxil etməmisiniz" yazdırın.

// var rəqəm = prompt('Zəhmət olmasa yaşınızı qeyd edin')
// if (rəqəm < 30) {
//   var kvadrat = rəqəm**2
//   console.log(kvadrat)
// } else if (
//   30 < rəqəm && rəqəm < 40 ){
//   console.log (rəqəm[rəqəm.length-1])
// }
// else if (
//   rəqəm < 0 || rəqəm > 100 
// ) {
//   console.log ("Düzgün məlumat daxil etməmisiniz")
// }

//Yeni fəsil

//1
//Looplardan istifade ederek aşağıdakı arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];
// var sum = 0
// for (var i = 0; i<arr.length; i++) {
// if (
//   arr[i]%5==0 && arr[i]%7==0
// ) {
//   sum += arr[i]
// }}
// console.log(sum)

//2
//Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];
// let threeDigitArr = [];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] >= 100 && arr[i] % 2 == 0) {
//     threeDigitArr.push(arr[i]);
//   }}
//   var x=threeDigitArr.sort()
//   console.log(x[x.length-1])


//3
//Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// var arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];
// var newArr = [];
// for (var i = 0; i<arr.length; i++) {
//   if (arr[i] !==3 && arr[i]%3==0)
// {
//   newArr.push(arr[i]);
// }}


//4
//Swith case  ilə calculator yazin

// var eded1 = parseInt(prompt('Zəhmət olmasa birinci ədədi daxili edin'));
// var eded2 = parseInt(prompt ('Zəhmət olmasa ikinci ədədi daxil edin'));
// var emeliyyat = prompt('Zəhmət olmasa hesablama işarəsini qeyd edin');

// switch (emeliyyat) {
//   case "+":
//     console.log (eded1 + eded2)
//     break;

//     case "-":
//       console.log (eded1 - eded2)
//       break;

//       case "*":
//         console.log (eded1 * eded2)
//         break;

//         case "/":
//           console.log (eded1 / eded2)
//           break;
// }

//Yeni fəsil
//1-ci task
//arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]
// var newArr = []
// for (var i = 0; i<arr2.length; i++) {
//   if (arr2[i].name.startsWith ('t')) {
//     newArr.push(arr2[i])
//   }
// } 
// console.log(newArr)

//2-ci task
//arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]
// var count = []

// for ( var i = 0; i<arr2.length; i++) {
//   if (arr2[i].name.startsWith('t') && arr2[i].name.endsWith('t')) {
//     count++
//   }
// }
// console.log(count)

//3-cü task
//arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]
// var count = []
// var sum = 0
// for (var i=0; i<arr2.length; i++) {
//   if ( arr2[i].name.startsWith('t')&&arr2[i].name.endsWith('t')){
//     count.push(arr2[i].key)
// sum += arr2[i].key
//   }
// }
// console.log(sum)

//4
//arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin
// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]

// var newArr = arr2.map(function(obj){
// if (obj.name.endsWith('e')) {
// obj.name = 'SuperDev'; }
// return obj}
// );
// console.log(newArr);

//5
//arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]

// var longestName = "";
// var longestNameKey = "";

// arr2.forEach((item) => {
//   if (item.name.length > longestName.length) {
//     longestName = item.name;
//     longestNameKey = item.key;
//   }
// });

// console.log(longestNameKey);

//6
//arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]


// var maxName = ""
// arr2.forEach(function(item){
//   if (maxName.length < item.name.length){
//     maxName = item.name
//   }
// });
// var result = arr2.findIndex(function(item)
// {
//   return item.name==maxName
// }
// );
// console.log(result**2);

//7
//arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin

// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]
// var newArr = []
// arr2.forEach(function(item) {
//   if ( 
//     item.name.length == 4 ){
//       newArr.push(item.name)
//     }
// });
// console.log(newArr)

//8
//arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// var arr2 = [
//   {    name:'test',    key:1  },
//   {    name:'task',    key:2  },
//   {    name:'tanqo',    key:3  },
//   {    name:'like',    key:4  },
//   {    name:'task',    key:5  },
//   {    name:'trust',    key:6  },
//   {    name:'test',    key:7  },
//   {    name:'last',    key:8  },
//   {    name:'tanqo',    key:9  },
//   {    name:'elephant',    key:10  },
//   {    name:'love',    key:11  },
//   {    name:'small',    key:12  },
//   {    name:'little',    key:13  },
// ]
// MaxKey = ""
// MaxName = ""
// arr2.forEach(function(item) {
//   if (
//     item.key > MaxKey
//   )
//   MaxKey = item.key
//   MaxName = item.name
// });
// console.log(MaxName)

//9
//arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin

//10
//SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

//10.1
//Göstərilmiş type-lara uyğun case-lər yazın ve yazdığınız functionda parametr olaraq type göndərin ve birinci mərhələdə sadəcə 'case'-in adını consola verin

// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// function processData (type) {
//   switch (type) {
//     case 'SET_DATA':
//     console.log('SET');
//      break;
//      case 'GET_DATA':
//       console.log('GET');
//       break;
//       case 'DELETE_DATA':
//       console.log('DELETE')
//       break;
//   }
// }
// processData('SET_DATA');
// processData('GET_DATA');
// processData('DELETE_DATA');

//2ci merhelede functiondan kenarda array yaradin ve Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';
// let Arr = []

// function processData (type) {
//   switch (type) {
//     case 'SET_DATA':
//     console.log('SET');
//      break;
//      case 'GET_DATA':
//       console.log('GET');
//       break;
//       case 'DELETE_DATA':
//       console.log('DELETE')
//       break;
//       case 'SET':
//       Arr.push(1,2,3,4,5,6,7,8,9,10)
//       console.log(Arr)
//   }
// }
// processData('SET_DATA');
// processData('GET_DATA');
// processData('DELETE_DATA');
// processData('SET');

//Case -  'DELETE'  olarsa arraydan 1 item silin ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI' ve sonda arrayi consola cixardin.

// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';
// let Arr = [];

// function processData (type) {
//   switch (type) {
//     case 'SET_DATA':
//     console.log('SET');
//      break;
//      case 'GET_DATA':
//       console.log('GET');
//       break;
//       case 'DELETE_DATA':
//       console.log('DELETE')
//       break;
//       case 'SET':
//       Arr.push(1,2,3,4,5,6,7,8,9,10)
//       console.log(Arr)
//       break;
//       case 'DELETE':
//         if (Arr.length === 0) {
//           console.log('Silinecek data tapilmadi');
//         } else {
//           Arr.splice(0, 1);
//           console.log(Arr);
//         }
//         break;
//   }
// }
// processData('SET_DATA');
// processData('GET_DATA');
// processData('DELETE_DATA');
// processData('SET');
// processData('DELETE');

//Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// function processData (type) {
//   switch (type) {
//     case 'SET_DATA':
//     console.log('SET');
//      break;
//      case 'GET_DATA':
//       console.log('GET');
//       break;
//       case 'DELETE_DATA':
//       console.log('DELETE')
//       break;
//   }
// }
// processData('SET_DATA');
// processData('GET_DATA');
// processData('DELETE_DATA'); 




//AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
//Example  'December - 31 days'
//QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// for (i=0; i<mL.length; i++) {
//   let month = mL[i];
//   let days;
//   switch (month) {
//     case 'January':
//       case 'March':
//         case 'May':
//           case 'July':
//             case 'August':
//               case 'October':
//                 case 'December':
//                   console.log(mL[i] + " -31 days")
//                   break;
//                   case 'February':
//                   console.log (mL[i]+ " -28/29 days")
//                   break;
//                   case 'April':
//                     case 'June':
//                       case 'September':
//                         case 'November':
//                           console.log (mL[i]+ " -30 days");
//                           break;




//Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const now = new Date();
// const month = mL[now.getMonth()]
// let days;

// for (i=0; i<mL.length; i++) {
//   switch (month) {
//     case 'January':
//       case 'March':
//         case 'May':
//           case 'July':
//             case 'August':
//               case 'October':
//                 case 'December':
//                   days = 31;

//                   break;
//                   case 'February':
//                     days = 28/29;
//                   break;
//                   case 'April':
//                     case 'June':
//                       case 'September':
//                         case 'November':
//                           days = 30;
//                           break; }}
//                           console.log(month+ ' - ' + days + ' days')


// Ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin


let fullName = 'Murad Nerimanli'
let names = fullName.split(' ');


