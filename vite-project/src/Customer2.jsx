import { MenuContext } from "./Context";
export default function Customer2() {
  return (
    <MenuContext.Consumer>
      {(price) => <div>2번 고객님은 {price.카페라때}원을 지불합니다.</div>}
    </MenuContext.Consumer>
  );
}