/**
 * Created by kimberlybicknese on 11/10/16.
 */

    //	Create	instance	of	XMLHTTPRequest

var	httpRequest	= new XMLHttpRequest();

//	Set	a	custom	function	to	handle	the	request

httpRequest.onreadystatechange = responseMethod;
function	responseMethod()	{
    if	(httpRequest.readyState	===	XMLHttpRequest.DONE)	{	//	Check	if	our	state	is	"DONE"
        if	(httpRequest.status	===	200)	{	//	If	our	request	was	successful	we	get	a	return	code/status	of	200
            //	This	is	where	we	update	our	UI	accordingly.
            console.log(httpRequest.responseText);		//	Our	data	is	available	to	us	through	the	responseText	parameter
        }	else	{
            //	Scenario	if	there	was	an	error	with	our	request
            console.log('There	was	a	problem	with	the	request.');
        }
    }
}

httpRequest.open('GET',	'http://data.consumerfinance.gov/api/views.json');

    //The	send()	method	takes	an	optional	parameter.	If	our	API	request	allows	additional	parameters	or	JSON	objects
    //to	be	passed	through	(primarily	through	POST	requests),	we	pass	them	in	the	send	method.

    httpRequest.send();