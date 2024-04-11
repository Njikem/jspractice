let customer_name = 'Alice';
let account_balance = 12365;
let is_active = true;

if(account_balance >= 1000){
    console.log(`customer_name:${customer_name}, account_balance:${account_balance}`);
}

 if(account_balance >= 5000){
    console.log(`account_balance:${account_balance}`);
}else{
    console.log(`customer_name: ${customer_name}`);
}

if(account_balance >= 10000){
    console.log('Congratulations you are eligible for a credit line!');
}


if(is_active === false && account_balance >= 1){
    console.log(`System Error, ${customer_name}`)
}else{
    console.log('no mistake');
}

if(customer_name === 'Robber Guy' && account_balance > 0 && is_active === true){
    console.log('Robber Alert');
}else{
    console.log('Hmmm');
}

let customer_object =[

{
    name: 'Alice',
    total_balance: 13470,
    is_active: true
}

]


if(customer_object['total_balance'] < 0){
    console.log('Error!! Check');
}else{
    console.log('Customer balance is good');
}


let companies = [
    {
        name: 'RBC BANK',
        stock_symbol: 'WDform',
        sector: ['tech', 'healthcare', 'consumer good'],
        industry: ['electronics', 'E-commerce', 'pharmaceutical', 'personal products'],
        founded: 1975,
        headquarters: 'Dubai',
        market_cap: 100000,
        yearly_revenue: 12500,
        yearly_profit: 15900,
    },
    {
        name: 'Scotiabank',
        stock_symbol: 'WDform',
        sector: ['banking', 'financial service'],
        industry: ['electronics', 'E-commerce', 'pharmaceutical', 'personal products'],
        founded: 1975,
        headquarters: 'Dubai',
        market_cap: 100000,
        yearly_revenue: 12500,
        yearly_profit: 15900,
    },

    {
        name: 'Tims',
        stock_symbol: 'WDform',
        sector: ['banking', 'financial service'],
        industry: ['electronics', 'E-commerce', 'pharmaceutical', 'personal products'],
        founded: 1945,
        headquarters: 'Dubai',
        market_cap: 100000,
        yearly_revenue: 12500,
        yearly_profit: 15900,
    },
    {
        name: 'Innotech',
        stock_symbol: 'WDform',
        sector: ['banking', 'financial service'],
        industry: ['electronics', 'E-commerce', 'pharmaceutical', 'personal products'],
        founded: 1950,
        headquarters: 'Dubai',
        market_cap: 100000,
        yearly_revenue: 12500,
        yearly_profit: 15900,
    }
]

// Practice -> Bad Code
console.log(companies[0]);
console.log(companies[1]);
console.log(companies[2]);

let i = 0

while(i < companies.length){
    let company = companies[i]
     console.log(`company_name: ${company.name}, yearly revenue: ${company.yearly_revenue}`);
    i++;
} 

for(let i = 0; i <companies.length; i++){
    let company = companies[i];
    console.log(`company_name: ${company.name}`);
}

for(let i = 0; i < companies.length; i++){
    let company = companies[i]
    if(company.founded <= 1950){
        console.log(`company_name:${company.name}, founding_year: ${company.founded}`);
    }
}

for(let i = 0; i<companies.length; i++){
    let company = companies[i]
    if(company.sector !== 'tech'){
        console.log(`company_name: ${company.name}, sector: ${company.sector}`)
    }
}


