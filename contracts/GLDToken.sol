// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
/**
@dev ERC20 Token Contract
- name: Gold
- symbol: GLD
- total supply: 1000 GLD
*/
contract GLDToken is ERC20 {
    constructor() ERC20("Gold", "GLD") {
        _mint(msg.sender, 1000 ether);
    }
}