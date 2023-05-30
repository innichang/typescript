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

## Array

Can declare what type of array it is by defining a type before array brackets like
string[], number[]
Array<string>, Array<number>

## Union Type

In some cases where you are not sure what exact type a variable needs to take, union is used.

**Try to keep it as strict as possible**

can declare multiple types and bring it together. so sometimes can follow 1st type and sometimes can follow 2nd type depending on the case.

if number | string, ts doesn't treat it as number or a string, it treats it as number AND string. so for example if, id: number | string, id.toUpperCase() gets an error.

#Union Narrowing

Can use if statement to narrow down what type a parameter is inside a function to use type specific methods.\

What if I want a mix of string and number inside one array?

_wrong answers_

string | number [] ???<br>
string[] | number [] ???

_right answer_

(string | number | boolean) []

How can you allow some numbers to be very strict?

let pi: 3.14 = 3.14
pi: 3.145 //cannot be 3.145

let str: "onlyThis" //can only be "onlyThis"

## Tuples

How about if you want specific things inside an array you want to push?

order of array matters in a tuple

but can use array methods and maybe push something into a tuple

## Enums

exists to restrict some choices in an offered value

_WHY USE ENUMS?_

can define functions, constants, variables

## Interface

type vs interface? what is the difference?

'extends' keyword

never involves the definition
involved must have things

**WHY IS INTERFACE IMPORTANT?**
implements keyword

<br>

## classes

## modifier key words

### public

everything not marked is automatically marked as public

<br>

### private

when a variable is marked as private, it is only accessible within the class

## Getters and Setters

setters cannot have a return type

get - used to get any property (public & private)

any private properties can be exposed outside but with some additional logic/restrictions

## Access modifiers

protected - accessible only in the class and the classes that inherits the original class

## inheritance

Inheritance is used when you want to use a certain class as a parent class

## Abstract Classes

<br>
when abstract is declared, no new objects can be declared
dbpassword
but can create object using the class who is extending the class

'super' keyword

## Generics

puts a comma to determin if <T> is just a HTML tag or not. <T,> : generics

## Type Narrowing

TypeScript overlays type analysis on JavaScript’s runtime control flow constructs like if/else, conditional ternaries, loops, truthiness checks, etc., which can all affect those types.

This adds 'Type Guards' to the code.

TypeScript follows the possible paths of the execution and analyzes the most specific type of a value at the given situation. This is Type Narrowing

### instnceof narrowing

### type predicate

### Discriminated Unions

    mentioning the name of interface inside the interface.

    use
    kind:
    or
    propertyFinder:
    etc...

### Exhaustive checking

    why is exhaustive checking useful?

    benefits?
