pragma solidity ^0.4.26;

contract inbox {
    string public message; 
    
    function Inbox(string InitialM) public {
        message = InitialM;
    }
    function setMessage(string NewM) public {
        message = NewM;
        }
    function doMath(int A, int B){
        A+B;
        A-B;
        A*B;
        A=0;
    }
}
