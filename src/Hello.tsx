import React, { Component } from "react";

type Color = "red" | "black" | "white";
type HelloProps = {
  name: string;
  color: Color;
  isSpecial: boolean;
};
class Hello extends Component<HelloProps> {
  static defualtprops = {
    name: "이름없음",
    color: "red",
  };
  render() {
    const { name, color, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>**</b>}
        안녕하세요 {name}
      </div>
    );
  }
}
// function Hello({name, color, isSpecial}:HelloProps){
//     return (
//         <div style={{
//             color
//         }}>
//             {isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     )
// }

// Hello.defaultProps={
//     name: '이름없음'
// }
export default Hello;
