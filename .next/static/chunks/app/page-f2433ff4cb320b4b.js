(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9767:function(e,s,t){Promise.resolve().then(t.bind(t,7151))},7151:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var n=t(7437),a=t(3388),r=t(2265);let l=a.ZP.connect("http://server.seekdecor.online");function i(){let[e,s]=(0,r.useState)(""),[t,a]=(0,r.useState)(""),[i,c]=(0,r.useState)([]),[o,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{l.on("receive_message",e=>{console.log(e),c(s=>[...s,{userId:e.userId,message:e.message}])})},[l]),(0,n.jsxs)("main",{className:"grid place-center py-10",children:[(0,n.jsx)("h2",{className:"text-2xl text-center",children:o?"room ".concat(t," "):"Enter a room number"}),(0,n.jsxs)("div",{className:"grid gap-3 max-w-3xl m-auto py-5",children:[o&&(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{className:"border border-gray-500 p-4",type:"text",value:e,onChange:e=>s(e.target.value)}),(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{s(""),c(s=>[...s,{userId:l.id,message:e}]),l.emit("send_message",{room:t,userId:l.id,message:e})},children:"Send Message"})]}),(0,n.jsx)("div",{className:"flex",children:o?(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{d(!1),a(""),c(""),s(""),l.emit("leave_room",t),l.emit("send_message",{room:t,userId:"system",message:"".concat(l.id," left")})},children:"Leave Room"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"border border-gray-500 p-4",type:"text",value:t,onChange:e=>a(e.target.value)}),(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{let e="welcome ".concat(l.id," joined");l.emit("join_room",t),l.emit("send_message",{room:t,userId:"system",message:e}),d(!0),c(s=>[...s,{userId:"system",message:e}])},children:"Join Room"})]})})]}),(0,n.jsx)("div",{className:"message p-10",children:o&&i.map((e,s)=>{let{userId:t,message:a}=e;return(0,n.jsx)("div",{className:"flex",children:"system"===t?(0,n.jsx)("div",{children:a}):(0,n.jsxs)("div",{children:[t,": ",a]})},s)})})]})}}},function(e){e.O(0,[506,971,596,744],function(){return e(e.s=9767)}),_N_E=e.O()}]);