---
title: PowerShell Arrays & Generic Lists
author: Kiran Reddy
date: "2015-06-22T22:40:32.169Z"
layout: post
draft: false
path: "/posts/powershell-arrays-generic-lists/"
category: "Coding"
tags:
  - "PowerShell"
  - "Arrays"
description: "A brief look at using arrays and lists in PowerShell"
---

In PowerShell the most common method of storing data is to store it in an ‘Array’.Arrays can be initialized using a simple syntax:

## Array
 
```powershell
# Initialize the array
$myarray = @()
 
#add an integer to the array
$myarray = $myarray + 1
 
#add a string
$myarray = $myarray + "Hello World"
 
#add a datetime object
$myarray = $myarray + (Get-Date) 
```
 
as you can see we can store just about any type of data in an array which can be good and bad. This can lead to errors in situations where a command expects a ‘string’ but gets an interger or a ‘datetime’ because it was not designed to handle mixed data types and will most likely throw an exception.Also the above method of adding items to an array is inefficient because every time a new item is added to the array this is what happens:

Instead of expanding the original array the contents of the ‘myarray’ variable is copied to a new array along with the ‘new item’ to be added and then the original is overwritten. This is fine in most situations but if you need to add a lot of items in say a loop then an ‘Arraylist’ may be the better option.



## System.Collections.Arraylist
 
```powershell
 #Initialize the array
$myarray = New-Object System.Collections.ArrayList

#add an integer to the array
$myarray.Add(1) 

#add a string
$myarray.Add('Hello World')

#add a datetime object
$myarray.Add((Get-Date)) 
```
 
This is looking much better but again the [‘arraylist’](https://msdn.microsoft.com/en-us/library/41107z8a.aspx) allows just about any type of data to be added. So what if we wanted to make sure that we have an array that is homogenous or in other words contains data, that is of just one particular type.  We can do so using ‘Generic Lists’.

 

## Generic Lists
 
```powershell
 #Initialize the array
$myarray = New-Object 'System.Collections.Generic.List[Int]'

#add an integer to the array
$myarray.Add(1) 

#add a string
$myarray.Add('Hello World')

Error:
Cannot convert value Hello World to type System.Int32;. Error: Input string was not in a correct format; 

```
 
Notice that we initialized ‘myarray’ with the type ‘Int’ indicating that we would be storing data of the type ‘Int’ and nothing else.

While we could add the integer 1 notice the exception that is thrown when we try to add a ‘string’ (Input string was not in the correct format) which basically means nope you cannot store a ‘string’ in an ‘integer’ array or list.

So you wanted to create a list of ‘string’ items then you would create the list as so:

 
```powershell
$myarray = New-Object 'System.Collections.Generic.List[String]'
```
 
While the syntax for creating a ‘Generic List’ may not seem easy there is the benefit of ‘Type Safety’ which guarantees the ‘type’ of data that is stored within it. This is probably the main reason why most developers choose to use it as opposed to the ‘arraylist’

In terms of performance the Generic list may slightly be better than the ‘arraylist’ but it may not be noticable with small amounts of data.