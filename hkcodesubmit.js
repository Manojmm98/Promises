let puppeteer = require("puppeteer");
//let {email,password}= require("./secret");
let gtab;
let browserwillbeopenpromise = puppeteer.launch({headless:false});
browserwillbeopenpromise.then(function(browserInstance){
    let newtabwillbeopenpromise = browserInstance.newPage();
    return newtabwillbeopenpromise;
}).then(function(newPage){
    let linkpagewillbeopenpromise = newPage.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    gtab=newPage;
    return linkpagewillbeopenpromise;
}).then(function(){
    let emailwillbetypedpromise = gtab.type("#input-1","vaxexev674@yncyjs.com",{delay:200});
    return emailwillbetypedpromise;
 }).then(function(){
     //console.log("emailis typed")
     let passwordwillbetypedpromise = gtab.type("#input-2","manoj1234",{delay:200});
     return passwordwillbetypedpromise;
 }).then(function(){
     let submitbuttonwillbeclickedpromise = gtab.click('button[data-analytics="LoginPassword"]');
     return submitbuttonwillbeclickedpromise;
 }).then(function(){
     console.log("click is done")
 })
