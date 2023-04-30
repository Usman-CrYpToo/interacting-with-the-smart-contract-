// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;

contract Lock{
    string private greeter = "usman";

  
     function getGreeter() public view returns(string memory){
        return greeter;
     }
     function setGreeter(string memory _greeter) public {
            greeter = _greeter;
     }
}