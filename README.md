# TypeScript

superset of JS

used for type safety

in JS: there are odd phenomenons like
2 + "2" = 22
null + 2 = 2
undefined + 2 = NaN

Some language have 'Static Checking' built in.

Static Checking: parser of languaged analyzed by IDE

TS - static checking during compile time to prevent errors during runtime

- dev tool

Types in TS: same as JS + a little more

to declare variable
keyword nameOfVariable: dataType = value

## Type Inference

## Any

If TypeScript isn't sure about what value is coming up in the future, it assigned a type 'Any'.

So I learned that coding like,

let userId: number = 334455<br>

isn't good good practice because from just

let userId = 334455 <br>

TypeScript is able to infer the type of the variable.

However, if you look at the hero example in variable.ts, we can understand an example of when it's good practice to put a type next to a variable.

By putting a type 'string' for hero, we can always make sure the output of hero is a string not any other in this case a boolean.

So any is like telling TypeScript, 'Hey I don't want to do the type checking for it, turn off type checking for that value'

Usually, 'any' needs to be avoided.

'noImplicitAny' = flags implicit 'any' as an error

## functions

It's good practice to give type checking to parameters because it warns you of any missing parameters, or if incoming parameter isn't suitable for the function to carry out operations.
Also, if a certain parameter is optional, and don't needs to be passed in, you can also give it a default value by simply giving it a type, same as the other parameters and then using the '=' to give a default value.

Also, in case of functions, it is safer to make sure to put what type data function wants to return. It can save a lot of time and helps us write efficient code.

## Never

## Object

## Type Aliases

## Different Keywords

readonly
? - makes the value of property optional

& - can mix and match 2 different types and assign it to 1.
(look myObjects.ts)
