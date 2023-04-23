import React from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

const DragDiv = () => {
  const divPos1 = useSpring({ x: 0, y: 0 });
  const divPos2 = useSpring({ x: 0, y: 0 });
  const divPos3 = useSpring({ x: 0, y: 0 });

  const bindDivPos1 = useDrag((params) => {
    divPos1.x.set(params.offset[0]);
    divPos1.y.set(params.offset[1]);
  });
  const bindDivPos2 = useDrag((params) => {
    divPos2.x.set(params.offset[0]);
    divPos2.y.set(params.offset[1]);
  });
  const bindDivPos3 = useDrag((params) => {
    divPos3.x.set(params.offset[0]);
    divPos3.y.set(params.offset[1]);
  });

  return (
    <div className="dragDivParent">
      <animated.div
        style={{
          x: divPos1.x,
          y: divPos1.y,
          width: "100%",
          // position: "absolute",
          // left: "30px",
          // top: "700px",
        }}
        className="animated-div1"
        {...bindDivPos1()}
      >
        <div className="dragDiv item1">
          <div className="dragChild">
            <h2>Buy with ETH</h2>
            <p>
              If you have enough ETH in your wallet, you can use the purchase
              BGPT with ETH option in order to swap the ETH in your wallet for
              BGPT. Type in the amount of BGPT you wish to purchase and then
              click “Convert ETH”. Your wallet provider will ask you to confirm
              the transaction and will also show you the cost of gas.
            </p>
            <div>BUY WITH ETH</div>
          </div>
        </div>
        {/* <div>DragDiv</div> */}
      </animated.div>

      <animated.div
        style={{
          x: divPos2.x,
          y: divPos2.y,
          // position: "absolute",
          // top: "500px",
          // left: "700px",
          // width: "30vw",
        }}
        className="animated-div2"
        {...bindDivPos2()}
      >
        <div className="dragDiv item2" id="dragDiv2">
          <div className="dragChild">
            <h2>Buy with USDT</h2>
            <p>
              Before you start trading, make sure you have at least $30 USDT in
              your wallet. Enter the amount of BGPT you wish to purchase
              (minimum 20,000). Click "Convert USDT". You will then be asked to
              approve the purchase twice. The first approval is for the USDT
              contract and the second approval is for the transaction amount.
              Please make sure you go through two approval steps to complete the
              transaction.
            </p>
            <div>BUY WITH USDT</div>
          </div>
        </div>
      </animated.div>

      <animated.div
        style={{
          x: divPos3.x,
          y: divPos3.y,
          // opacity: "0",
          // width: "30vw",
          // position: "absolute",
          // top: "1000px",
          // left: "650px",
        }}
        className="animated-div3"
        {...bindDivPos3()}
      >
        <div className="dragDiv" id="dragDiv3">
          <div className="dragChild">
            <h2>Buy BNB</h2>
            <p>
              If you don’t have enough BNB in your wallet to make a purchase,
              you can use our onramping partner, Transak, in order to buy BNB
              directly using your card or via a bank transfer. Simply choose
              your purchase method, go through their simple KYC flow and you’ll
              be able to make a purchase directly in the widget.
            </p>
            <div>BUY WITH USDT</div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default DragDiv;
