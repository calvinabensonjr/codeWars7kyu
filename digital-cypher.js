/*
https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

Instructions:

 Introduction
Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
Digital cypher series
Digital cypher vol 1
Digital cypher vol 2
Digital cypher vol 3 - missing key
*/

Solution:

function encode(str,  n)
//params - str, n
//return - an array of integers reprenting the encoded str
//example - t a  s  k
//         20 1 19 11
//       +  1 9  3  9 (key)
//      -------------------
//         [21, 10, 22, 20]
//pseudo
//two arrays?
//input array, output array
//n is key(1939)
//str by default is scout
//need letter to be equal to their corresponding number

{
  //const alphabet = ['a','b','c','d','e','f', 'g','h','i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v', 'w', 'x', 'y','z']
    const key = String(n)
  return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
  console.log(str, n)
  return str;
}

