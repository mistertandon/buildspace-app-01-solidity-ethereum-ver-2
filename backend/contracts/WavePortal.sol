// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal{

    uint256 totalWaves;

    uint256 private seed;

    mapping(address => uint256) public lastWavedAt;

    struct Wave{
        address waver;
        string message;
        uint256 timestamp;        
    }

    Wave[] waves;

    event NewWave(address indexed from, uint256 timestamp , string message);

    constructor() payable {
        console.log('Hi from WavePortal contract');

        seed = (block.difficulty + block.timestamp) % 100;
    }



    function wave(string memory _message) public {

        require(
            lastWavedAt[msg.sender] + 15 minutes < block.timestamp,
            "Wait for 15 minutes"
        );

        lastWavedAt[msg.sender] = block.timestamp;
        
        totalWaves +=1;
        console.log("%s waved w/ message %s: ", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        console.log("New wave has been added by sender %s", msg.sender);

        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Randon # generated %d ", seed);
        
        if(seed < 50){
            uint256 prizeMoney = 0.001 ether;

            require(prizeMoney <= address(this).balance, "Trying to withdraw more money than the contract has");
            (bool success, ) = (msg.sender).call{value: prizeMoney}("");

            require(success, "Failed to withdraw money from smart contract");
        }

        emit NewWave(msg.sender, block.timestamp, _message);
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