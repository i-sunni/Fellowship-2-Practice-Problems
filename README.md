# 3.7 Debugging Practice

## Do this first

1. Run `npm install`
2. Run `npm start`
3. Open Visual Studio Code to this folder.

## The assignment - what you need to do

1. This is a short exercise. There is only one error. Can you find it?


## Do this after

1. Run `git commit -m "Fixed a button where clicking the div will change background color."`
   1. Feel free to get creative with this message. It's for your benefit.

If anything goes wrong here, please ask for assistance.

# 4.7 Debugging Practice Solution

The code "looks" right at first, but remember, you cannot assign to `this.state` outside of
the constructor. Instead, use `this.setState()` method.