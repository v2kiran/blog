---
title: Scour - Lucene search in PowerShell
date: "2018-09-11T22:40:32.169Z"
layout: post
draft: false
path: "/posts/scour-lucene-search/"
category: "Coding"
tags:
  - "PowerShell"
  - "Lucene"
  - "Search"
description: "Lucene search implemented in powershell"
---
## The What
[Scour](https://www.powershellgallery.com/packages/Scour/1.1) is a powershell module created by [Lee Holmes](http://www.leeholmes.com/blog/2018/08/28/scour-fast-personal-local-content-searches/). It enables searching of text content on the filesystem based on open source software [apache lucene](https://lucene.apache.org/).

## Install
You install the module from the powershell gallery via:

```powershell
Install-Module Scour -Scope CurrentUser
```

>Note: Works with Powershell v5 and above

## How Does it Work
Scour creates indexed databases at the root of each folder that needs to be searched. Each database indexes content not only from files at the root but also in subfolders as well.The database location is fixed and contained in a folder called **"__scour"**

## Indexing Folders
Lets say you wanted to index 2 folders:

- c:\temp\mydocs1
- c:\mydocs2

you would run this:

```bash
cd C:\temp\mydocs1
Initialize-ScourIndex

cd c:\mydocs2
Initialize-ScourIndex
```

You should now see something like this:

<figure class="is-pulled-right" style="width: 360px">
	<img src="./mydocs1.png" alt="RDP user">
	<figcaption>My Docs-1</figcaption>
</figure>

The database itself looks something like this:

<figure class="is-pulled-right" style="width: 360px">
	<img src="./lucenedb.png" alt="RDP user">
	<figcaption>Lucene Database</figcaption>
</figure>


## Supported Types
By default lucene can index most files containing text which include files from popular programming languages such as powershell,python,c#, javascript etc. but it cannot index Microsoft office(docx,xlsx,pptx) or pdf's.

To overcome this we make use of another open source library called [TIKA](https://github.com/KevM/tikaondotnet) for text extraction.

After loading the Tika library dll's we can use tika to extract office documents and pdf's like so:


```powershell
# create a tika instance
$tExtractor = [TikaOnDotNet.TextExtraction.TextExtractor]::new()

# Extract text from a pdf
$pdf = "C:\temp\mydocs1\the-adventures-of-tom-sawyer.pdf"
$pdf_content = $tExtractor.Extract($pdf).Text

# Extract text from a docx file
$docx = "C:\temp\mydocs1\Azure_Services_Platform.docx"
$docx_content = $tExtractor.Extract($docx).Text

```

In addition to extracting text Tika can also extract metadata from a document. This can be very useful when you have a bunch of documents containing tags and that can be indexed and searched.

We can set tags on any word document by going to:
**File --> info --> tags**

<figure class="float-right" style="width: 460px">
	<img src="./tags.png" alt="RDP user">
	<figcaption>Set Tags on a word document</figcaption>
</figure>

we can now test the metadata with this code:

```powershell
$docx = "C:\temp\mydocs1\test.docx"
$docx_metadata = $tExtractor.Extract($docx).metadata
$docx_metadata.GetEnumerator().where{$_.key -notmatch ":"} | sort key

Key                         Value
---                         -----
Application-Name            Microsoft Office Word
Application-Version         16.0000
Author                      Kiran Reddy
Character Count             12
Character-Count-With-Spaces 13
Content-Type                application/vnd.openxmlformats-officedocument.wordprocessingml.document
Creation-Date               2018-09-11T18:58:00Z
creator                     Kiran Reddy
date                        2018-09-11T19:00:00Z
description                 mycomment
FilePath                    C:\temp\mydocs1\test.docx
Keywords                    test,unimportant,scour
Last-Author                 Kiran Reddy
Last-Modified               2018-09-11T19:00:00Z
Last-Save-Date              2018-09-11T19:00:00Z
Line-Count                  1
modified                    2018-09-11T19:00:00Z
Page-Count                  1
Paragraph-Count             1
publisher
Revision-Number             3
subject                     test,unimportant,scour
Template                    Normal.dotm
title                       This is a test document
Total-Time                  2
Word-Count                  2
X-Parsed-By                 org.apache.tika.parser.DefaultParser, org.apache.tika.parser.microsoft.ooxml.OOXMLParser


```

## Usage

To search for content we can do this:

```powershell

PS C:\temp\mydocs1> Search-ScourContent "mark twain"

    Directory: C:\temp\mydocs1

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        9/10/2018   4:26 PM         990675 the-adventures-of-tom-sawyer.pdf

PS C:\temp\mydocs1>
```

> **Tip**. 
by default content search is based on term query meaning 2 words separated by a space such as "mark twain" means look for the word "mark" or the word "twain" anywhere in the document. On occasions when we want the words to appear next to each other we would want to use a phrase query.
We can make any term query a phrase query by simply enclosing the words inside double quotes

### Phrase query

```powershell
Search-ScourContent '"mark twain"'
```

The module also includes an **about_query_syntax.txt** which contains excellent information about the lucene engine query syntax.


## Cons
- Cannot Update the Index: As of now there is not a way to update the index but since the filehash has been added to the database i suspect we will get an update function at some point in the future.
- The lucene version used is pretty old and dates back to 2012 but that that is latest stable version available.There is a newer version released in 2017 but its in beta and may not be stable not to mention the fact that most of the classes have been separated into their own libraries.

Have a great day!