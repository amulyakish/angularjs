(function() {
'use strict';
    
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);
    
    
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
      var list1 = this;
        
      list1.items = ShoppingListService.getToBuyItems();

      list1.buyItem = function (itemName, itemQuantity, itemIndex) {
        ShoppingListService.buyItem(itemName, itemQuantity, itemIndex);
      }
    }

    
    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
      var list2 = this;

      list2.items = ShoppingListService.getBoughtItems();
    }

    
    function ShoppingListService() {
        var service = this;

        // List of shopping items        
        var toBuyList = [
            {name: "cookies", quantity: 10},
            {name: "chips", quantity: 2},
            {name: "soda", quantity: 3},
            {name: "pretzels", quantity: 5},
            {name: "bread", quantity: 2},
        ];

        var alreadyBought = [];

      service.buyItem = function (itemName, quantity, itemIndex) {   
          toBuyList.splice(itemIndex, 1);
          var item = {
            name: itemName,
            quantity: quantity
          };
          alreadyBought.push(item);            
      };
        
      service.getToBuyItems = function () {
        return toBuyList;
      };

      service.getBoughtItems = function () {
        return alreadyBought;
      };
    }
})();