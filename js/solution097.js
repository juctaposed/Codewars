// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



// full url -> domain name
// string, no numbers/arrays/funny business/ -> string

function domainName(url) {
  // right away im thinking since we need to remove certain patterns like www., http:// and https://, we can chain some string methods here
  return url.replace('www.', '').replace('http://','').replace('https://', '').split('.')[0]
}


// 'http://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript', 'codewars'
// 'www.instagram.com', 'instagram'
// 'https://navalnuclearlab.energy.gov/', 'navalnuclearlab'