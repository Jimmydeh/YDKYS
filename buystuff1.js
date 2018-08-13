	const PRICE_MOTORCYCLE = 5860;
	const PRICE_ACCESORIES = 357;
	const TAX_RATE = 0.21;
	const BANK_BALANCE = 76540;
	
	var amount = 0;
  var combination = 0;
	
	
	function taxrate(){
	 return amount * TAX_RATE;
		}
  
  function combinationCost(){
     return PRICE_MOTORCYCLE + PRICE_ACCESORIES
  }

 

  while (amount < BANK_BALANCE){
    amount = amount + combinationCost();
  }

  amount = amount + taxrate();
  amount = amount.toFixed(0);


    while (amount > BANK_BALANCE){
      alert(`I can't afford this because the total price is ${amount}!!`)
      amount = amount - combinationCost();
      alert(`I returned one bike, total cost now is ${amount}`)
      

    }

    
alert(`Thank you for your business!!`);                                                                                                                                                                                                                                                                                                                                                                                                               
      