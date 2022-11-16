var xml = new XMLHttpRequest()

//console.log(xml)
xml.onreadystatechange = function ()
{
    if(xml.readyState == 4)
    {
        console.log(xml)
        document = xml.response
    }

}   
xml.open("GET", "https://jsonplaceholder.typicode.com/posts/1")
xml.send()