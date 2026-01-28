/*
===============================================================================
PROBLEM: Check if a string is a valid URL (basic check)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`

Check whether the string is a VALID URL (basic format check).

We are NOT doing deep internet validation — just structure.

A basic valid URL should:
✔ Start with http:// or https://
✔ Have a domain name
✔ May include path, query, or hash


EXAMPLE
-------
"https://google.com"           → true
"http://example.org/page"      → true
"www.google.com"               → false
"hello world"                  → false
"https:/wrong.com"             → false


KEY IDEA (BEGINNER WAY)
----------------------
We just verify the URL STRUCTURE:
1. Must start with http:// or https://
2. Must contain a domain name after that
3. Domain must have at least one dot (.) like example.com


CORNER CASES TO HANDLE
---------------------
1. Non-string input → false
2. Empty string → false
3. Missing protocol → false
4. Spaces in URL → false (basic rule)


@params
-------
@param {string} str → input string

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using URL Constructor)
===============================================================================
*/

const isValidURLModern = (str) => {
   if (typeof str !== "string") return false;

   try {
      const url = new URL(str);
      return url.protocol === "http:" || url.protocol === "https:";
   } catch {
      return false;
   }
};

console.log(isValidURLModern("https://google.com"));
console.log(isValidURLModern("ftp://example.com"));

/*
PSEUDOCODE — isValidURLModern

FUNCTION isValidURLModern(str)

    IF str is NOT a string
        RETURN false

    TRY
        CREATE a URL object from str

        IF protocol of URL is "http:" OR "https:"
            RETURN true
        ELSE
            RETURN false

    CATCH error (invalid URL format)
        RETURN false

END FUNCTION


TEST CASES
----------

INPUT:  "https://google.com"
OUTPUT: true

INPUT:  "http://example.org"
OUTPUT: true

INPUT:  "ftp://example.com"
OUTPUT: false   (unsupported protocol)

INPUT:  "not a url"
OUTPUT: false   (invalid format)

INPUT:  ""
OUTPUT: false   (empty string)

INPUT:  12345
OUTPUT: false   (not a string)
*/
