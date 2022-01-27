import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useMemo, useState, useCallback } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const DropClaim = () => {
  const { provider } = useWeb3();

  const sdk = useMemo(() => {
    if (provider) {
      return new ThirdwebSDK(provider.getSigner())
    }
    return undefined;
  }, [provider]);

  const dropModule = useMemo(() => {
    if (sdk) {
      return sdk.getDropModule("0xDF2011Fb01d74B3f460948646252F03c7eF1f8b7")
    }
    return undefined;
  }, [sdk]);

  const onClick = useCallback(() => {
    
    dropModule.claim(1);

  }, [dropModule]);

  return (
    <div>
        <br>
        
        </br>
      <button style={{ padding: "10px 20px", textAlign: "center",  backgroundColor: "#44014C" , color: "white"}}class="btn" onClick={onClick}>
        Claim single Drop!
      </button>
    </div>
  );
};
export default DropClaim;