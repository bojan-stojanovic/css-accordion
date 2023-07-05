# Accessible accordion using css grid for expanding/collapsing items  

This is simple accordion wich is using css grid instead of javascript to expand/collapse items. Javascript is still needed for triggering, and accessibility though.  

## Browser support  
All browser released in 2017 and forwards should work (except IE ofcourse)  

## Usage  
Accordion has 2 modes:  
1. All accordion items can be expanded  
2. Only single accordion item can be expanded at the time

In order to change mode, simple change `data-only-one-active="false"` to `data-only-one-active="true"` in accordion element.  
By default accordion is in mode **1**.  

## Demo
Demo can be found [here](https://codepen.io/bojanS/pen/XWyaNrr, "Accessible accordion using css grid").