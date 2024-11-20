#web security and privacy

##security
    -oversights: lack of authentication, no encryption, no time out, un patched software, bugs exposing user data

    -cross site scripting: inserts html on your webpage and steal stuff, they replace script tags with a new one, pass information fromt the page to foriegn page, download user's cookies and passwords

        -How?:  attacker provides a link and let you go to their java script and let the user navigate to there

        -mitigation: don't allow any html to be inserted, against SQL injection

    -DDos: woverwhelming a server with bots
        -hard to spot bc attackers use many controlled compromiesed machines, cannot detect robots
        
        -mitigation: rate limiting, throw out excess traffic at random, distribute traffic across network

    -Need to send requests: GET/POST
    -Need to send responses: HTML documents
    -Network channels aren't necessarily secure
    -Someone between two requestors may be bad

    Encryption we want our message to be unreadable by 3rd parties, function: F(X)=Y easy to compute, F-1(Y)=X difficult to compute

    -HTTPS is secure HTTP, it represents an encrypted connection
        -data passed back and forth is enctypted, browser and server agree on a key, handled by SSL (requires showing certificate)

    

##privacy
    -cookies: a name/value pair created by a website to store information on your computer, brwoser enters, server response and store a cookie on your computer, then when the browser requests again with the cookies, server return the data (EX: amazon track user)

    use cookies for better user experience and easier tracking

    privacy policiy: do we obtain or not?  obey the law, what the web site does with andy information it collects, it has the right of blocing people

  -Digital certificate:
    The contents of a server's digital certificate include: 
    -The public key, effective date of certificate, authenciation of this website