/**
 * Değişkenler - Veri Tutucular & Scope Özellikleri
 *
 * Değişkenler verileri geçici olarak tutmamızı sağlayan yapılardır.
 */


// var name = "Emre";
// var age = 22; // integer
// var firstName = "Emre"
// // var 1sayi = "aaa"
//
//
// console.log("Merhaba Dünya")
// console.log(name)
// console.log(age)

/**
 * Var değişken tanımlama
 *
 * her yerden ulaşabiliriz.
 *      - function scope adı verilir.
 * -tekrar tanımlama yapılabilir.
 * -değerini güncelleyebiliriz.
 *
 */

var firstName = "Emre";
console.log(firstName);
firstName = "Ahmet";
console.log(firstName);
var firstName = "Murat";
console.log(firstName);

/**
 * let ile değişken tanımlama
 *
 * let ile tanımlanan değişkene:
 *
 * - yalnızca tanımlandığı süslü parantezlerin arasında erişilir.
 *          - Block scope adı verilir.
 *
 * - Tekrardan TANIMLANAMAZZ !!!
 * - değerlerini güncelleyebiliriz.
 */

let lastName = "Taştekin";
console.log(lastName);
lastName = "Acar";
console.log(lastName);
// let lastName = "Parlak";


/**
 * CONST Sabit Tanımlama
 *
 * const ile tanımlanan değişkene:
 *
 * - değişkenin tamamı büyük harflerden oluşması öneriliyor.
 * -Block Scope Özelliği vardır. (yalnızca tanımlandığı süslü parantezlerin arasında erişilir.)
 * -Değeri güncellenemez.
 */

const AD = "Emre";

// AD = "İsmail"
// const AD = "Murat"











