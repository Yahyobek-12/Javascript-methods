// Thema: Methods

// Method-1 = split()
// Tarir: split(" ") methodi bizning o'zgaruvchimizda qancha element borligini aniqlab beradi

// const txt = "I go to school";
// const newTxt = txt.split(" ");
// console.log(newTxt)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-2 = join()
// Tarif: join(" and ") methodi faqatgina array[] larda ishlaydi va array[] ga yangi element qo'shib beradi

// const myFullName = ["yahyobek", "ergashboyev"];
// const newName = myFullName.join(" Faxriddininovich ");
// console.log(newName);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-3 pop()
// Tarif: agar fruits.pop()  shunday yozsak bizga ohirgi elementni o'chirib beradi
// Tarif: agar const removed = fruits.pop()  bizga ohirgi elementni qoldirib beradi

// const fruits = ["apple", "mango", "banana"];
// const removed = fruits.pop()
// console.log(removed);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-4 push()
// Tarif: agar biz const newcars = cars.push("bugatti") qilib yozsak bizga bugatti ni qo'shib bermaydi aksincha array[].length qili beradi
// Tarif: agar biz cars.push("bugatti") qilib yozsak bugattini qo'shib beradi
// Tarif: push() methodi faqatgina arraylarda ishlaydi

// const cars = ["bmw", "mers"];
// cars.push("bugatti");
// console.log(cars);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-5 slice()
// Tarif: agar biz cars.slice(0, 2) yozsak bizga bitinchi ya'ni mers va bmw ni chiqaradai 2 elementdan keyingisini chiqarmaydi

// const cars = ["mers", "bmw", "bugatti", "labarghini"];
// const result = cars.slice(0, 2);
// console.log(result);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-6 sort()
// Tarif: sort() methodi bizga sartirofka qilib beradi alifbo bo'yicha 

// const ABC = ["c", "a", "b", "e"];
// ABC.sort()
// console.log(ABC)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Method-7 splice()
// Tarif: splice() methodi bizga join() methodi ga o'xshab yangi element qo'shib beradi
//  va qaysi elemntdan oldin yoki keyin joylash imkoniyati bor

// const fruits = ["apple", "banana", "kiwi"];
// fruits.splice(1, 0, "cherry");
// console.log(fruits);

