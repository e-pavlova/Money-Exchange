let arrCoinObj = [{name : 'H', value : 50}, {name : 'Q', value : 25},{name : 'D', value : 10},{name : 'N', value : 5},{name : 'P', value : 1},];

module.exports = function makeExchange(currency)
{
    let currExchObj = {};

    if (currency >= 10000)
    {
        currExchObj.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else if (currency === 0)
    {
        return currExchObj;
    }
    else
    {
        let currentCurr = 0;

        for (var i = 0; i < arrCoinObj.length; i ++)
        {
            let coinsCount = 0;

            if ((currentCurr = Math.floor(currency / arrCoinObj[i].value)) >= 1)
            {
                for (var j = 0; j < currentCurr; j++)
                {
                    coinsCount += 1;
                }
                currency -= currentCurr * arrCoinObj[i].value;
            }
            if (coinsCount > 0)
            {
                currExchObj[arrCoinObj[i].name] = coinsCount;
            }
        }
    }
    return currExchObj;
}

