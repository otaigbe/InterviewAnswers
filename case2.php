<?php
echo "<b> Case 2: 
 Given var cointypes = [25, 10, 7, 2], 
Run a loop based on the coin types and using the greedy algorithm, 
return number of each type of coin we can have, if we were given 191 naira. 
Please note that i want your result in pyramid form (i believe you know how a pyramid looks like). 
I want this implementation in javascript and then in PHP.</b>";


echo "<h1> My Solution</h1>";
$cointypes = array(25, 10, 7, 2);
$amount = 191;
$result = numberOfEachCoinType($cointypes, $amount);

print_r($result);


function numberOfEachCoinType($cointypes, $amount){
	for ( $i = 0; $i < count($cointypes); $i++) {
   $value = $amount/$cointypes[$i];
   $solution[$cointypes[$i]] = floor($value);
}
    return $solution;
}
?>