const style = `
.board {
  fill: #f7931e;
  animation: 3s seesaw ease-in-out infinite alternate;
  transform-origin: center;
}

.cls-3 {
  fill: #b3b3b3;
}.
cls-4 {
  fill: #4d4d4d;
}
`


export default function Seesaw(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421.03 159.35">
    <defs>
      <style>
        {style}
      </style>
    </defs>
    <rect className="board" x="31.34" y="67.79" width="343.39" height="9.75" rx="1.24"/>
    <path className="cls-3"
          d="M163.15,150.57a1.45,1.45,0,0,1-1.27-.74,1.44,1.44,0,0,1,0-1.47l39.88-69.09a1.47,1.47,0,0,1,1.28-.73,1.44,1.44,0,0,1,1.27.73l39.89,69.09a1.48,1.48,0,0,1,0,1.47,1.46,1.46,0,0,1-1.27.74Z"/>
    <path className="cls-4"
          d="M203,79a.94.94,0,0,1,.84.48l39.89,69.09a1,1,0,0,1-.84,1.46H163.15a1,1,0,0,1-.84-1.46L202.2,79.52A.94.94,0,0,1,203,79m0-1a2,2,0,0,0-1.71,1l-39.89,69.09a2,2,0,0,0,1.71,3h79.78a2,2,0,0,0,1.7-3L204.74,79a2,2,0,0,0-1.7-1Z"/>
  </svg>
}