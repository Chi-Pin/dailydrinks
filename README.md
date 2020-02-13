Support Feature:
  - Display orders by list (without price and notes)
  - Add new order into the lists when user input
  - Delete exist order from the lists when user remove


Environment:
	React ES6


User Guide:
 - Fill the order into each blank, and then click "add" button to put into drink order list
 - Chose corresponding people name to remove certain order from drink order list


Implemented Detail:
 - Three main classes, first for list display, second for add order, and the last for delete item
 - Use an array list to save order list information
 - Listen add event by onSubmit
 - List remove event by onChange