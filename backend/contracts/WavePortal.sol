// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal{

    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp , string message);

    constructor(){
        console.log('Hi from WavePortal contract\n');
    }

    struct Wave{
        address waver;
        string message;
        uint256 timestamp;        
    }

    Wave[] waves;

    function wave(string memory _message) public {
        totalWaves +=1;
        console.log("%s waved w/ message %s: ", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        console.log("New wave has been pushed from sender %s", msg.sender);
        
        emit NewWave(msg.sender, block.timestamp,_message);
        console.log("Event NewWave has been emitted");
    }

    function getAllWaves() public view returns (Wave[] memory){

        console.log("RETURN: getAllWaves: waves");
        return waves;
    }

    function getTotalWaves() public view returns (uint256){

        console.log("Retrieved total waves %d", totalWaves);
        return totalWaves;   
    }
}