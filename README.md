# CT30A3204 Advanced Web Applications - Week 1 Exercise
## Requirements
### 1. HTML generator in JavaScript   
 * Generate at least five wiki items with JavaScript. 
  * All of the wiki items have to be generated with JavaScript using functions such as createElement and appendChild 
 * the web page should not have a single wiki item without JavaScript. 
  * Use the same element tags and class names as on the template! 
  * Generate them inside a <div> with a class container.

### 2. Dog image API  
* Get pictures of dogs from dog API. 
* Each wiki-item should have header with a name of the breed 
* a picture fetched from the API of the breed of your choosing. 
* The pictures should be random pictures from the breeds that you have chosen.


### 3. Mobile first CSS
*  To disable the horizontal scrolling add the following meta to <head> element:  
 ```<meta name="viewport" content="width=device-width, initial-scale=1">```

* set the width of the image (using its class wiki-img) to 100%.
* Add some margin for the wiki-item, so that it would have empty space on right and left (margin-right and margin-left should be something else than 0px). For example, 10px should be fine.
* make the wiki items easier to separate from each other, set the wiki-item box-shadow to something that you like.
* wiki-content should also have some padding on all sides (top, right, bottom and left) so that the text and image have some space from the edges. 


### 4. Media queries

* To make a different look for the desktop, use media query. 
* The minimum width for the desktop version should be 600px. 

* To make this page better looking for desktop, using the media query for screens that are at least 600px, 

  * set the display of the wiki-content to flex, and 
  * set the flow-direction to row-reverse. Now, the image and text should be side by side. 

* The width of the text and image container should be 50% so that the both sides have half of the available space.
  
    * This should be done using the "width" css-rule, but due to the restrictions in CodeGrade, set the min-width AND max-width to 50% for the wiki-text and for the img-container.

* make it so that wiki items would not take the whole page. To achieve this: 

  * wrap everything inside a div with a class container, and set the max-width to 960px. 

  * Also set the margin of that class and use "0 auto" value so that it sets the margin automatically to left and right and centers the content. 


### 5. Wiki text from Wikipedia

 * Use Wikipedias API to get the summary for every breed page (/page/summary/{title}. 

 * Use the value from the extract key as the text.  

 * API: https://en.wikipedia.org/api/rest_v1/ 