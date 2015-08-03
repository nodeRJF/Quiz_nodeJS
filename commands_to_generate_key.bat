set SSL=C:\OpenSSL-Win32\bin\
rem mkdir certs
rem cd certs
rem C:\nodeJS\openssl-0.9.8r-i386-win32-rev2\openssl genrsa -out quiz-2015-key.pem 2048
rem C:\nodeJS\openssl\bin\openssl x509 -req -in quiz-2015-csr.pem -signkey quiz-2015-key.pem -out quiz-2015-cert.pem -config 'C:\nodeJS\openssl\openssl.cfg'
rem C:\nodeJS\openssl-0.9.8r-i386-win32-rev2\openssl req -new -sha256 -key quiz-2015-key.pem -out quiz-2015-csr.pem  
set OPENSSL_CONF=c:\OpenSSL-Win32\bin\openssl.cfg

%SSL%\openssl genrsa -out quiz-2015-key.pem 2048
%SSL%\openssl req -new -sha256 -key quiz-2015-key.pem -out quiz-2015-csr.pem 
%SSL%\openssl x509 -req -config %SSL%..\openssl.conf -in quiz-2015-csr.pem -signkey quiz-2015-key.pem -out quiz-2015-cert.pem 
 
