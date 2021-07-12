// Crie um programa que me diga como lucrar nesta situação: 
//quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

valor_total_bike = (300/60)*100;
valor_venda = valor_total_bike + ((valor_total_bike/100)*25)
console.log(`O valor pra vender a bike é R$ ${valor_venda},00`)