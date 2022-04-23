# _Mr. Roboger's Neighborhood_

#### By _**Louie Knolle**_

#### _A simple web application a user can utilize by inputting a positive number and receive a range of numbers counting up from 0 to their inputted number. Substitutions are made for certain numbers._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap 4.5_
*_Javascript 3.6.0_


## Description

_Set up as a soon to be robot-themed Mr. Roger's Neighborhood, the webpage for Mr. Roboger's NeighBOThood welcomes users and displays a list of upcoming features to the website. Beneath this, there is an area displaying the site's "Mr. Roboger's Robot Counter" which visitors to the site can use while it's under construction.  By submitting a number of their choosing, the user is returned a range of numbers starting at 0 and counting by 1 up to their number, but with a twist.  Since robots count in a different manner, numbers containing the digit "1" are replaced with "beep", numbers with the digit "2" are replaced with "boop", and numbers containing "3" are replaced with "Won't you be my neighbor?". They can continue to input different numbers and only the new range will be displayed._

## Setup/Installation Requirements

* _Clone this repository from Github to your desktop_
* _Once the directory is open, select index.html_
* _Choose which browser you want to open it in_

_[Github-Pages-Link](louieknolle.github.io/program-portfolio)_


## Known Bugs

* _The picture on the home page is temporary, I couldn't link the Bootstrap JS correctly for the carousel of 3 different photos to work_

## License

_MIT_

Copyright (c) _2022_ _Louie Knolle_


Describe robotify()

Test: "It should return an array of numbers starting at 0 and increasing by 1 up to and including the value of the inputted user value."
Code: robotify(3);
Expected output: [0, 1, 2, 3]

Test: "All the digits of a number containing a 1, should be replaced with 'Beep!'"
Code: robotify(3);
Expected output: [0, Beep!, 2, 3]

Test: "All the digits of a number containing a 2, should be replaced with 'Boop!'"
Code: robotify(3);
Expected output: [0, 1 , Boop!, 3]

Test: "All the digits of a number containing a 2, should be replaced with 'Boop!'"
Code: robotify(3);
Expected output: [0, 1 , Boop!, 3]

Test: "All the digits of a number containing a 3, should be replaced with 'Won't you be my neighbor?'"
Code: robotify(3);
Expected output: [0, 1 , 2, Won't you be my neighbor?]


