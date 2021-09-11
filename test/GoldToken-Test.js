const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Gold Token", function () {
  let GoldToken;
  beforeEach(async function () {
    [Alice, Bob] = await ethers.getSigners();
    const goldToken = await ethers.getContractFactory("GLDToken");
    GoldToken = await goldToken.deploy();
  });

  //Token Name
  it("Should have proper token name", async function () {
    expect(await GoldToken.name()).to.equal("Gold");
  });

  //Token symbol
  it("Should have proper token symbol", async function () {
    expect(await GoldToken.symbol()).to.equal("GLD");
  });

  //18 Decimals
  it("Should have proper token decimals", async function () {
    expect(await GoldToken.decimals()).to.equal(18);
  });

  //Token supply
  it("Should have proper token supply", async function () {
    expect(await GoldToken.totalSupply()).to.equal(
      ethers.utils.parseEther("1000")
    );
  });
  //Alice Should Have all the Gold
  it("Should have proper Alice balance", async function () {
    expect(await GoldToken.balanceOf(Alice.address)).to.equal(
      ethers.utils.parseEther("1000")
    );
  });
  //Bob Should Have 0 Gold
  it("Should have proper Bob balance", async function () {
    expect(await GoldToken.balanceOf(Bob.address)).to.equal(0);
  });
  //Alice Sends 100 Gold to Bob
  it("Should send Gold from Alice to Bob", async function () {
    await GoldToken.transfer(Bob.address, ethers.utils.parseEther("100"));
    expect(await GoldToken.balanceOf(Bob.address)).to.equal(
      ethers.utils.parseEther("100")
    );
  });
});
