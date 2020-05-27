const Contract = artifacts.require("EthereumClaimsRegistry");

contract("EthereumClaimsRegistry", async (accounts) => {
  const OWNER = accounts[0];
  const ALICE = accounts[1];
  const BOB = accounts[2];

  beforeEach(async () => {
    instance = await Contract.new();
  });

  describe("Claims tests", async () => {
    it("should set and get alices claim", async () => {
      //https://web3-type-converter.brn.sh/
      //Temperature as bytes32 = 0x54656d7065726174757265
      //100 as bytes32 = 0x64
      await instance.setClaim(ALICE, "0x54656d7065726174757265", "0x64");

      const actual = await instance.getClaim(OWNER, ALICE, "0x54656d7065726174757265");
      console.log(actual);

      assert.equal("0x6400000000000000000000000000000000000000000000000000000000000000", actual);
    });
  });
});
