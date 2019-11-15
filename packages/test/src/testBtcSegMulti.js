import Btc from "@ledgerhq/hw-app-btc";

export default async transport => {
  const btc = new Btc(transport);
  var tx1 = btc.splitTransaction(
    "0100000000010130992c1559a43de1457f23380fefada09124d22594bbeb46ab6e9356e8407d39010000001716001417507f91a6594df7367a0561e4d3df376a829e1fffffffff02c03b47030000000017a9142397c9bb7a3b8a08368a72b3e58c7bb850555792875f810acf0900000017a914813a2e6c7538f0d0afbdeb5db38608804f5d76ab8702483045022100e09ca8a5357623438daee5b7804e73c9209de7c645efd405f13f83420157c48402207d3e4a30f362e062e361967c7afdd45e7f21878a067b661a6635669e620f99910121035606550fd51f6b063b69dc92bd182934a34463f773222743f300d3c7fd3ae47300000000",
    true
  );
  var tx2 = btc.splitTransaction(
    "0100000000010176ef6abce7feecefbe1322da6cd21245f2d475a1836f13e99f56847bf7127f7c0100000017160014a4e29e297768fccd19cabc21cced93a6afc803eeffffffff0280778e060000000017a9142397c9bb7a3b8a08368a72b3e58c7bb8505557928795061b51b100000017a914c5cfa33e119f60c7cb40bd6b9cfe9e78b026eb6a8702473044022031f0c72683374275328ef0341ed1f233c55a37e21335f9c111c25645b50d0d4e0220670b833be0f688c237bf4466d2b94c99631ada3557c95a7d13bfbb9177125c340121020879f8616da54f8ac5476b97fbe0329c5a0e4cbd32e22e7348262bdfad99a44200000000",
    true
  );
  const result = await btc.createPaymentTransactionNew(
    [
      [tx1, 0],
      [tx2, 0]
    ],
    ["49'/1'/5'/0/0", "49'/1'/5'/0/0"],
    undefined,
    "01ecd3e7020000000017a9142397c9bb7a3b8a08368a72b3e58c7bb85055579287",
    undefined,
    undefined,
    true
  );
  return result;
};
