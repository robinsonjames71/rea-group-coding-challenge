## REA Group Coding Challenge

### Introduction

I have chosen AngularJS as it can meet the requirements of the brief and is a technology I am comfortable with.

I have also chosen to use BootStrap for similar reasons and feel it should simplify the UI development.

### Notes

From dataService service I am using the $resource function to obtain the property data as defined in data.json

The service is then injected into the controller where the property data is now available to be added to the scope

This property data is traversed and directives are repeated based on the number of items in the results and saved arrays

The directives have the property object from the results or saved array and addRemoveProperty method passed into them

The details of the property are then displayed from within the directive and the addRemoveProperty method can be invoked from the button

addRemoveProperty method accepts two parameters, whether the property object is to be removed or added to the saved array, and the property object itself