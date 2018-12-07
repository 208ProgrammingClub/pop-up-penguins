# Find the Penguins! 

## i. Setting up our environment

This tutorial was designed to be used with Cloud9 an Intelligent Development Editor.  Cloud9 has since been bought out by Amazon and generally requires a paid subscription.  however there are free educational accounts that can be set up. It has been my desire to research free IDE's and revamp some of the IDE tricks and tips listed in this tutorial however the research is not final.

Log into your Cloud9 account (www.cloud9.io).

Before we begin building our game we must first Identify the code language we will be using and setup our environment.  This project is a lesson based on html (Hypertext Markup Language) and CSS (Cascading Style Sheets). 99% of modern day websites you visit use HTML and if it has at least any font styles or colors, with great certainty it is using CSS to tell HTML how to display your code. 

If your workspace does not contain the following files  you will need to create them.  If you already have them then you may skip this step go to Step 2 Open Index.html.

    + index.html
    + styles.css

To create a new file:  Under __File__ select __New File__ to open a blank file then once more click on __File__ and then click on __Save AS__...enter the correct file name and click Save. Great!  We need to create and save a file for each of the following file names below be sure to save the file extension (.html , or .css) with the file name.


## ii. Template index.html

once inside index.html on line 1 type the following:

doc

then press Tab.
### Wow! what just happened?  

Well the short version is...Cloud 9 is an IDE.  When speaking of software development the acronym IDE stands for "Integrated Development Environment".  An IDE is a programmers best friend.  An IDE knows a lot about codeing in fact it knows how to properly build out the necessary skeleton of an html file. The IDE was watching our steps and anticipated what we wanted.  So when we 
###### 1) save a blank file as index.html 
###### 2) type in the command doc and 
###### 3) press the tab button.  
###### 4) Like a good friend it stepped in and said "let me handle this for you!"

 Cloud 9.io IDE also has buit in helpers called __intellisense__ which will change colors of our text indicating our code is either of a specific type, it is complete, or it will inform us in the event a logical error exists. 

Within our html file we will work a lot with commands called tags here are a couple of examples to get started with. 

This is an opening html div tag: ```<div>```,  and this is a closing is html div tag ```</div>```.  A ```<div>``` in html allows us to place our code within a section of our screen and keep it seperated from other code just like a penguin enclosure keeps penguins separated from other animals in a Zoo.

We use these characters <> to start and </> stop blocks of codes called "tags" within html.
This is an opening ```<link>``` tag, 

Some tags like the ```<link>``` tag can close all by themselves a "self closing tag" looks like this

    ```<link type="text/css" />```


We are still inside our index.html file and we need to set a title for our application.  Do you see there is no text between the opening and closing ```<title></title>``` tags?  We need to create a title to look like this:

```html
<title>Pop-up-Penguins</title>
```


The title we give our html document will show up in the browser tab when we are done.  The title is important because very complex websites will have several html files and we can navigate to them individually using our browser.

### iii. Linking our files together

Next we need to link our html file to the css file so they can talk to each other.  We do this by using a <link> tag.  Please use your mouse to highlight and copy the following single line of code.
```html    
<link rel="stylesheet" href="/styles.css" type="text/css" />
```
If you have never used the mouse to Cut Copy and Paste here is how we do it
1) highlight the text you want to copy
2) Once the complete line is highlighted press [Ctrl+C] to copy
3) the text is now saved to your clipboard.  It will remain there until you overwrite it or shut down your computer. 
4) Next open your index.html file.  Once inside your index.html file, click on the first line below the <title></title> tags but before the closing </head> tag.  Feel free to make some extra lines using your enter key if there is no space for you to paste.
5) now press [Ctrl+V] to paste your copied text

##### Your index.html file should look like this:
```html

<html>
<head>
    <meta charset="UTF-8">
    <title>Pop-up-Penguins</title>
    <link rel="stylesheet" href="styles.css" type="text/css" />
    
</head>
<body>
    

</body>
</html>

```
We are going to be doing a lot of Cut - Copy - & Paste in this exercise so feel free to practice until it becomes natural to you before moving on.  

Be sure your file looks exaclty like the example above.  If you are not certain it would be a good idea to Cut - Copy - and Paste all the code from the example above before saving your fle.


6)  Save your files by pressing [CTRL-S] or with your mouse, select File then Save.  Great! thats all there is to it. Our environment is set up for now.  We have a title on our HTML page and our styles.css file is linked to our index.html file.
    
# Now let’s start building our game.
    
## Step 1: Div'ing up

In this step we’ll be adding a set of `<div>` tags to our HTML and matching styles in our CSS.

Lets start first  by opening the HTML tab and finding the opening and closing `<body>` tags.  check to see if there is any code between `<body>` ...and...`</body>` if so delete everything between the `<body>` tags.  Then
Add the new code:  
##### remember you should have the opening and closing `<body>` tags already so dont add more
```html

<body>

<div id="gameholder">
		<div id="title"></div>
		<div class="penguin1"></div>
		<div class="penguin2"></div>
		<div class="penguin3"></div>
		<div class="penguin4"></div>
		<div class="penguin5"></div>
		<div class="penguin6"></div>
		<div class="penguin7"></div>
		<div class="penguin8"></div>
		<div class="yeti"></div>
</div>

</body>
```
What is this code doing?:

These divs are defining the structure for our game. Each “penguin” `<div class="penguin"></div>` will be a little mound of snow hiding a penguin (or a yeti..Yikes!).  Above we mentioned the `,div>` tags provide an invisible enclosure to our HTML.  Remember also Cascading Style Sheets (css) gives our html some swagger! using css we can tell html how to size, color, and style our browser view.  I hope you think it looks great!  We will be adding colors, action, and images to the CSS file as well to allow our html to interact with you the user.

Well don't just stand there.  what are you waiting for?  Go to the CSS tab, we have penguins to tend to!

# 2) Tuxedos aren't just black and white!
To start off your css file should not have any code or comments in it.  Go ahead and erase any code in yur css file if there is any hiding in there.  Reports say there is a hungry penguin eating Yeti on the loose!

##### Add the following code starting with .body and ending 14 lines later with a } to line 1 of the CSS tab:
```css
.body {
    background-color: #996633;
}
#gameholder {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
}
#title {
    width: 600px;
    height: 150px;
    background-image:url('');
}

```

#### View our work:

We can preview our code so far in C9.io anytime by clicking on Preview in the Menu Bar but first you must save your work!  If you are unable to preview your code try the following steps:

To save: press Ctrl+S
To view: select Index.html in the Tab bar above making it active in the view then press Preview + Live Preview File (index.html)
I would advise spitting your window vertically so you always have a Live Preview of the file index.html throughout this exercise!

#### Qestions?

Why do some headings start with __"."__ while others start with __"#"__?  What exactly is this code doing?:

In programming css we always use classes and ID's to help design our html document.

To program an ID we always use the __.__ followed by the ID name like this:
`.body`

To program a css "class" we use the # symbol followed by a class name like this:
`#gameholder`


```
    ID'S ARE UNIQUE:
        Each element can have only one ID
        Each page can have only one element with that ID
        An ID therefore may only be used once.
        
    CLASSES ARE NOT UNIQUE:
        You can use the same class on multiple elements.
        You can use multiple classes on the same element.
```
    

`.body` is making our entire background a nice "ice-blue" color.  A healthy environment for a penguin don't you think?  Notice `.body` starts with a period.  This is how we identify a css class.  

Notice #gameholder starts with a # character.  This is how we define a css ID. When we call 
   `#gameholder` inside an element like this ```  <div #gameholder>  ``` 

 

#### ID in styles.css
 You can actually see in our css file  `#gameholder` has defined parameters which will make any container on our web page 600px wide; will center that container on the screen using margin-left and margin-right.  An ID like `#gameholder` provides our elements the necessary instructions on how we want to change the display in that area of our html.
#### ID's in index.html
 Remember we linked our css and html files together in step iii.  It’s invisible right now because we haven't told `#gameholder` what images or text to show.  So for now in index.html our `<div #gameholder>` element is an empty container, and yet the ID `#gameholder` tells our html where, and what size to display.

The ID `#title` is setting a size for our our title `<div>` and giving that `<div>` a background image. In this case that image happens to be the container which holds the title and/or instructions to our game. You can't see anything yet so We’ll add some words in the next step.  #title is another css ID.

### Recap:
Our css file has told our html file to reserve this space for now helping us to organize our other elements.  Notice #gameholder starts with a # character.  Don't forget, this is how we define a css ID.  ID's can be told do everything a class can do, however an element may only have one ID.  Displaying a big banner and setting the title graphic once with a single `<div>` element is a great way to utilize an ID because we only want one title on our page -not multiple titles. 

 `<div>`, `<span>` or `<title>` are all examples of elements.  Each element can have only one ID assigned to it in HTML. 
        
ID's and Classes can also set images, sounds, video, and interactive commands like swipe, hover, click to name a few.  Classes and ID's are very powerful.

## 3. Adding Images through CSS
### a) Adding the title
Lets pass our first image from css to HTML.  We have obtained a cool title (no pun intended) for our game "Find The Penguins".  We will use the image file in our workspace, and paste it into the empty property background-url(' ') in our #title ID.  

1. Below is the file path and file name for an image we want to use.  Copy the following file path and file name.
    
            media/penguin_title.png

2. Find the css #title ID. Now, within #title{  }  find the last line that looks like this: 

background-image:url('');

3. Between the two '' marks, paste the copied file path into our css.
4. Our #title ID should now look like this:  Notice there are no extra spaces

```css
#title {
    width: 600px;
    height: 150px;
    background-image:url('media/penguin_title.png');
}

```
### b) Let’s add some penguin class!

The following class has been partially created to add snow covered mounds for our penguins in the CSS file:
```css
.penguin1 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('');
}
```
Within your c9.io workspace the folder titled media contains images of all the snow covered mounds which will hide our penguins....and the yeti!  You can view the workspace files by clicking on the "Workspace" tab on the right margin.

In order to point html to our image files we need to use the complete file path.  Lets tell html to display this snow mound as our  background for penguin1.  We use the background-image:url property in css to navigate down the directory tree to our media folder and set mound_1.png as our background for penguin1.  The code is already built for us we just need to point our backround-image styling to the specific file:  media/mound_1.png  

like this:
```css 

    background-image:url('media/mound_1.png');
```

here is another option.  In order to point to a file we found online we would paste the url between the ' ' like this: 
```css      
    background-image:url('https://bcw.blob.core.windows.net/public/img/penguins/img/mound_1.png');
```


Choose a method from above and copy the file path or the URL then put your cursor between the (' ') at the end of the background image property and paste.

All of our CSS looks like this so far:
```css
body {
    background-color: #996633;
}
#gameholder {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
}
#title {
    width: 600px;
    height: 150px;
    background-image:url('media/penguin_title.png');
}
.penguin1 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_1.png');
}
```

A preview of our code so far in C9.io should show our title and one snow mound for the `<div class="penguin1">` Remember to first save your work!


## Step 4: Rolling over

Now let’s add a rollover or `:hover` effect to our mound. Find an image of mound_1_hover.  We'll use that image to add intrigue and suspense to our game!

In the styles.css tab find our `.penguin1` class.
Make a new line below the .penguin1 class and add the following style:
```css
.penguin1:hover {
    background-image:url('');
    cursor: pointer;
}
```
This style is what’s called a pseudo-class. It’s a way to add effects and additional styles to elements that we’ve already created.  A pseudo class should always be placed after the original css class which is why we need to add a new line below the .penguin1 class and then paste the pseudo class.  If you did not do this correctly `:hover` will not work.

In this pseudo class we will be instructing index.html to change the background image of penguin1.  If you look in index.html it is this very tag `<div class="penguin1"></div>` that your browser is displaying in your view and changes to the pseudo class when your mouse hovers over it. If you have ever visited a website and watched your cursor change to a "pointer", or a small hand/pointing finger when you move your mouse over a button that's `:hover` doing it's job!  `:hover` gives our users another clue that the snow mound is "clickable".

before you try it out lets not forget to paste the actual image link inside the quotes ('') of the pseudo class in our styles.css file just like we did above.  Look for this empty pseudo class..
```css
penguin1:hover { 

background-image:url('')
}
```
Here is the :hover image file we want to paste inside penguin1:hover.

        media/mound_1_hover.png
        
Our css file should now look like this:
```css
.body {
    background-color: #996633;
}
#gameholder {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
}
#title {
    width: 600px;
    height: 150px;
    background-image:url('media/penguin_title.png');
}
.penguin1 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_1.png');
}
.penguin1:hover {
    background-image:url('media/mound_1_hover.png');
}
```        

Go to the preview mode and run your mouse over the first mound. Did the image change? That’s `:hover` doing its job.  

Now that we’ve got our mound tempting us, let’s hide a penguin inside our mound and use another pseudo-class to make the penguin pop up when clicked.

In the CSS tab find the `.penguin1:hover` class which we just added.  just beneath, the closing } for penguin1:hover class... add the following class:  
###### HINT: this should be the very bottom of your styles.css file
```css
.penguin1:active {
    background-image:url('');
}
```
`:active` is another type of pseudo-class. Similar to  `:hover` it adds/changes the style of `.penguin1` when the div is clicked with the mouse.

The order of the pseudo-classes is important. An `:active` class should always come after or underneath `:hover` in the code for the effect to work properly.

We want use media/penguin_1.png image for penguin1:active.  So go ahead now and set the penguin1:active background Image in your styles.css file like this:
```css
.penguin1:active {
    background-image:url('media/penguin_1.png');
}
```


Lets see if it worked.  Go back to the preview and click on the first mound. Did the penguin pop up? Hold your mouse button down to keep the penguin from popping back down.

## Step 5.  More active penguins please!
To finish this step we need to copy the `.penguin1` class, and both pseudo classes and use it to make styles for `.penguin2` `.penguin3` `.penguin4`... clear through `.penguin8`. Be sure to copy an extra set of  penguin classes to make into a `.yeti` class as well later.  

Next is some quick work but it takes precision so mdon't rush.  You have just duplicated 9 sets of the same penguin.  When we view this we see the same penguin which is penguin1 duplicated 9 times.  Even the same penguin pops up out of the snow mound.  It works, but it is not interesting enough for us.  We want different snow mounds and different penguins on each `.penguin` and each `.penguin:hover`, and each `.penguin:active`  

To finish this we need to leave the first three penguin1 clases and pseudo classes alone. But change the numbers in the class title, and the numbers in our image files for the next set to media/penguin_2, media/mound_2, media/mound_2_hover.  Then we need to repeat this for penguin 3, penguin4, penguin 5 penguin6, penguin 7 penguin 8 and pengui9.

I know this is confusing so I'll start you off with penguin1, penguin2 and penguin3.  You will have to finish the rest on yuor own.
```css
.penguin1 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_1.png');
}
.penguin1:hover {
    background-image:url('media/mound_1_hover.png');
}
.penguin1:active {
    background-image:url('media/penguin_1.png');
}

.penguin2 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_2.png');
}
.penguin2:hover {
    background-image:url('media/mound_2_hover.png');
}
.penguin2:active {
    background-image:url('media/penguin_2.png');
}

.penguin3 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_3.png');
}
.penguin3:hover {
    background-image:url('media/mound_3_hover.png');
}
.penguin3:active {
    background-image:url('media/penguin_3.png');
}

```
Hopefully once you can see the groupings it makes sense just canging the numbers for each group makes a dramatic difference in our game 
If you added the correct :hover image to each penguin you should get different images on your screen as you hover over them.  If not, repeat the step above using the following file paths.

    media/mound_1_hover.png
    media/mound_2_hover.png
    media/mound_3_hover.png
    media/mound_4_hover.png
    media/mound_5_hover.png
    media/mound_6_hover.png
    media/mound_7_hover.png
    media/mound_8_hover.png
    media/mound_9_hover.png
    
The key here is to assign the unique hover images into the coorect "penguin?:hover" class.


To finish this step:
Make new `:hover` classes for each of our `.penguin` and `.yeti` classes. You can find the images in our media folder.
Make new `:active` classes for each of our `.penguin` and `.yeti` classes. Add penguin images from the media tab. We will use penguin9 later to hide the yeti in the next step.



## Step 6: Oh no a yeti!
The suspense is killing us, Bring on the Yeti!   We now use the yeti in the place of penguin9 like this.
```css
.yeti {
    width: 200px;
    height: 2000px;
    float:left;
    background-image:url('media/yeti.png');
}
.yeti:hover {
    background-image:url('media/mound_9_hover.png');
}
.yeti:active {
    background-image:url('media/penguin_9.png');
}
```


## Step 7: Yeti Alert!!!
We’ve got all our penguins and yeti in place. The game is pretty much complete but nothing happens to those fat delicious penguins  when the vicious yeti is clicked.  We will be adding an alert which pops up if the yeti is found.

So far we haven't writen a single line of Javascript code.  You have actually been coding in two separate languages  CSS, and HTML.  pretty cool huh?  To invoke our alert we will need to create a JavaScript file.

Go to File then click NewFile. then click File then  click SaveAs and give your file the name;   yetiAlert.js 

Below is a little bit of Javascript and jQuery that will pop up a browser alert with the text “Oh no!” when you press your mouse button on the yeti.  Copy all the lines in the box including my comments it will help you understand whats happening if you ever revisit this file later.
```javascript
//The next line of code is pretty advanced but $(document).ready basically says wait for the 
//document to load before running this next function.  
$(document).ready( function() {
    //After your page has loaded the function has started 
    // The following code is what we call a handler for the "mousedown" event 
    // notice we added it to the .yeti class.
    $(".yeti").mousedown(function() {
    // if the <div> containing our yeti class is clicked the alert below pops up    
        alert("Oh no!");
    });
});
```
Right now the alert won't work because our HTML file is not linked to our yetiAlert.js file. We must also tell our index file that we will be speaking in Jquery so please load that language as well. Right now index.html doesn't even know or care if Jquery or our yetiAlert.js file even exists.  Its pretty busy tending to all those penguins.  

Remember in the initial steps we were setting up our environment and we linked our styles.css file to our index.html file using a `<link>` tag?  Well now we need to load the language Jquery and our yetiAlert.js file to our index.html file but we will use a `<script>` tag for these two steps instead.

## Step 8. Wrapping it up!
### Our completed index.html file looks like this:
```html
<html>

<head>
    <meta charset="UTF-8">
    <title>Pop-up-Penguins</title>
    <link rel="stylesheet" href="styles.css" type="text/css" />

</head>

<body>
    <div id="gameholder">
        <div id="title"></div>
        <div class="penguin1"></div>
        <div class="penguin2"></div>
        <div class="penguin3"></div>
        <div class="penguin4"></div>
        <div class="penguin5"></div>
        <div class="penguin6"></div>
        <div class="penguin7"></div>
        <div class="penguin8"></div>
        <div class="yeti"></div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="yetiAlert.js"></script>
</body>

</html>
```

### Our completed styles.css file  looks like this:
```css
.body {
    background-color: lightblue;
}
#gameholder {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
}
#title {
    width: 600px;
    height: 150px;
    background-image:url('media/penguin_title.png');
}
.penguin1 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_1.png');
}
.penguin1:hover {
    background-image:url('media/mound_1_hover.png');
}
.penguin1:active {
    background-image:url('media/penguin_1.png');
}



.penguin2 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_2.png');
}
.penguin2:hover {
    background-image:url('media/mound_2_hover.png');
}
.penguin2:active {
    background-image:url('media/penguin_2.png');
}


.penguin3 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_3.png');
}
.penguin3:hover {
    background-image:url('media/mound_3_hover.png');
}
.penguin3:active {
    background-image:url('media/penguin_3.png');
}


.penguin4 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_4.png');
}
.penguin4:hover {
    background-image:url('media/mound_4_hover.png');
}
.penguin4:active {
    background-image:url('media/penguin_4.png');
}



.penguin5 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_5.png');
}
.penguin5:hover {
    background-image:url('media/mound_5_hover.png');
}
.penguin5:active {
    background-image:url('media/penguin_5.png');
}


.penguin6 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_6.png');
}
.penguin6:hover {
    background-image:url('media/mound_6_hover.png');
}
.penguin6:active {
    background-image:url('media/penguin_6.png');
}


.penguin7 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_7.png');
}
.penguin7:hover {
    background-image:url('media/mound_7_hover.png');
}
.penguin7:active {
    background-image:url('media/penguin_7.png');
}


.penguin8 {
    width: 200px;
    height: 200px;
    float: left;
    background-image:url('media/mound_8.png');
}
.penguin8:hover {
    background-image:url('media/mound_8_hover.png');
}
.penguin8:active {
    background-image:url('media/penguin_8.png');
}

.yeti {
    width: 200px;
    height: 200px;
    float:left;
    background-image:url('media/mound_9.png');
}
.yeti:hover {
    background-image:url('media/mound_9_hover.png');
}
.yeti:active {
    background-image:url('media/yeti.png');
}
```
### Our completed yetiAlert.js file should look like this:
```javascript
//The next line of code is pretty advanced but document.ready basically says wait for the 
//document to load before running this function.  
$(document).ready( function() {
    //After your page has loaded the function is started 
    // The following code is what we call a handler for the "mousedown" event 
    // notice we added it to the .yeti class.
    $(".yeti").mousedown(function() {
    // if the <div> containing our yeti is clicked the alert below pops up    
        alert("Oh no!");
    });
});
```
## Step 9: Challenge accepted!
So now things should be working.  Try out our game in the preview mode. 

Now that we’ve got all our penguins (and a yeti) hidden let’s play the game! Find a friend or a family member and challenge them to find all the penguins without accidently clicking on the yeti.

After they’ve had a go, go back to your index.html file and mix the `<div classes...>` up in your to reshuffle the mounds and let them try again. 

To finish this project:

Teach your playing partner how to change the images around by reordering the `<div classes...>` and trade off challenging each other to a game of “Find the Penguins.”

To learn more about HTML and CSS I highly reccomend the Khan Academy's computer programming series.  You can learn to program interactive web pages like this at https://www.khanacademy.org/computing/computer-programming.
