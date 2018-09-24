var amazonMws = require('amazon-mws')('AKIAJOPACSXXT3LVO5CQ', 'FsmPXMYVlUvy8WJWrla3ijP2wZLTsHsUT4q7HXc7');
// amazonMws.products.searchFor({
//     'Version': '2011-10-01',
//     'Action': 'GetLowestPricedOffersForASIN',
//     'SellerId': 'ACRJK0JIVA95K',
//     'MWSAuthToken': 'amzn.mws.a2ab3b35-11d4-be30-d53d-8cc985b091ae',
//     'MarketplaceId': 'ATVPDKIKX0DER',
//     'ASIN': 'B07235DD62',
//     'ItemCondition': 'New'
// }, function (error, response) {
//     if (error) {
//         console.log('error products', error);
//         return;
//     }
//     console.log('response ', response);
// });

// amazonMws.products.search({
//     'Version': '2011-10-01',
//     'Action': 'ListMatchingProducts',
//     'SellerId': 'ACRJK0JIVA95K',
//     'MWSAuthToken': 'amzn.mws.a2ab3b35-11d4-be30-d53d-8cc985b091ae',
//     'MarketplaceId': 'ATVPDKIKX0DER',
//     'Query': 'shoes'
// }, function (error, response) {
//     if (error) {
//         console.log('error ', error);
//         return;
//     }
//     // console.log('response', response);
    
//     for(var i =0; i<response.Products.Product.length; i++){
//     console.log(response.Products.Product[i].AttributeSets);
//     }
// });

// var reportRequest = function () {
    var reportRequest = function () {
        amazonMws.reports.search({
            'Version': '2009-01-01',
            'Action': 'GetReport',
            'SellerId': 'ACRJK0JIVA95K',
            'MWSAuthToken': 'amzn.mws.a2ab3b35-11d4-be30-d53d-8cc985b091ae',
            'ReportId': '11411387701017798'
        }, function (error, response) {
            if (error) {
                console.log('error ', error);
                return;
            }
            console.log('response', response);
        });
    };
    
    reportRequest();