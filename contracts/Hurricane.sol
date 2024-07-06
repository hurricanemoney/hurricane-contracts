pragma solidity ^0.8.19;

// SPDX-License-Identifier: MIT

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Hurricane is Ownable {

    error TransferAmountTooLow(string message);
    event Transfer(address indexed from, address indexed to, uint256 indexed value, uint16 fee);

    uint16 public fee = 500;

    receive() external payable {}

    function setFee(uint8 _fee) external onlyOwner {
        fee = _fee;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    function transfer(address _to) external payable {
        if (msg.value < 1 ether) {
            revert TransferAmountTooLow("Hurricane: transfer amount must be 1 ether or more");
        }
        payable(_to).transfer(msg.value - (msg.value * fee / 10000));
        emit Transfer(msg.sender, _to, msg.value, fee);
    }
}